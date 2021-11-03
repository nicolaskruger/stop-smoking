import { PayloadAction } from "@reduxjs/toolkit";
import { InfoState } from "../info.slicer";

const validateLessThenEqualZero = (value: number): number => {
    if (value <= 0) {
        throw new Error("value must be more then zero");
    }
    return value;
}

const declareTrue = (state: InfoState): InfoState => (
    {
        ...state,
        declare: true
    }
)

export interface InfoSimpleState extends Omit<InfoState, 'declare'> {

}

const infoSetPre = {
    setCigaretsPerDay: (state: InfoState, action: PayloadAction<number>): InfoState => (
        {
            ...state,
            cigarretsPerDay: validateLessThenEqualZero(action.payload)
        }
    ),
    setCigaretsPerPack: (state: InfoState, action: PayloadAction<number>): InfoState => (
        {
            ...state,
            cigarretsPerPack: validateLessThenEqualZero(action.payload)
        }
    ),
    setYearsSmook: (state: InfoState, action: PayloadAction<number>): InfoState => (
        {
            ...state,
            yearsSmook: validateLessThenEqualZero(action.payload)
        }
    ),
    setPrice: (state: InfoState, action: PayloadAction<number>): InfoState => (
        {
            ...state,
            price: validateLessThenEqualZero(action.payload)
        }
    ),
    setCoin: (state: InfoState, action: PayloadAction<string>): InfoState => (
        {
            ...state,
            coin: action.payload
        }
    ),
    setState: (state: InfoState, action: PayloadAction<InfoSimpleState>): InfoState => {
        const keys = Object.keys(action.payload) as (keyof InfoSimpleState)[];
        return keys.reduce((acc, curr) => {
            const value = action.payload[curr];

            return {
                ...acc,
                [curr]: typeof value === 'number' ? validateLessThenEqualZero(value) : value
            }
        }, state)
    }
}

const keys = Object.keys(infoSetPre) as (keyof typeof infoSetPre)[]

const infoSet = keys.reduce((acc, curr) => {

    const oper = acc[curr]

    return (
        {
            ...acc,
            [curr]: (state: InfoState, action: PayloadAction<string> & PayloadAction<number>) => declareTrue(oper(state, action))
        }
    )
}, infoSetPre)

export {
    infoSet
}