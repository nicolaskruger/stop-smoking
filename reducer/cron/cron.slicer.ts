import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."
import { LOCAL_SOTRAGE } from "../../constants"
import { getMyCookies } from "../../util"

const SECONDS_IN_ONE_DAY = 86400;
const SECONDS_IN_ONE_WEEK = SECONDS_IN_ONE_DAY * 7;
const SECONDS_IN_ONE_MONTH = SECONDS_IN_ONE_DAY * 30;
const SECONDS_IN_ONE_YEAR = SECONDS_IN_ONE_DAY * 360;

export type CronState = {
    currDate: Date,
    stopDate: Date,
    scale: ScaleDto,
}

const configInitialState = (state: CronState): CronState => {
    return state ? ({
        ...state,
        currDate: new Date(state.currDate),
        stopDate: new Date(state.stopDate)
    }) : ({
        currDate: new Date(),
        stopDate: new Date(),
        scale: {
            name: "1 Dia",
            scale: SECONDS_IN_ONE_DAY
        }
    })
}

const initialState: CronState = configInitialState(getMyCookies<CronState>(LOCAL_SOTRAGE.CRON));

export const cronSlicer = createSlice({
    name: "cron",
    initialState,
    reducers: {
        stopDate: (state: CronState): CronState => ({ ...state, stopDate: new Date() }),
        currDate: (state: CronState): CronState => ({ ...state, currDate: new Date() }),
        setScale: (state: CronState, payload: PayloadAction<ScaleDto>): CronState => ({ ...state, scale: payload.payload })
    }
})

export const cronAction = cronSlicer.actions;
export const cronReducer = cronSlicer.reducer;

export type ScaleDto = {
    name: string,
    scale: number
}

const range = (size: number, ofset = 0) => {
    return "a".repeat(size).split("").map((val, index) => index + ofset)
}
const listScale = (num: number, name: string, scale: number): ScaleDto[] => range(num, 1).map((val) => ({
    name: `${val} ${name}`,
    scale: scale * val
}));

export const cronSelector = {
    getCurrState: (state: RootState) => state.cron.currDate,
    getStopState: (state: RootState) => state.cron.stopDate,
    getScale: (state: RootState) => state.cron.scale,
    getTimePass: (state: RootState) => {
        const { currDate, stopDate } = state.cron;
        const seconds = (currDate.getTime() - stopDate.getTime()) / 1000;
        const days = Math.abs(seconds / SECONDS_IN_ONE_DAY + 1)
        return `Dia ${days}`
    },
    getTimeDiffSeconds: (state: RootState) => (state.cron.currDate.getTime() - state.cron.stopDate.getTime()) / 1000,
    getScales: (): ScaleDto[] => ([
        ...listScale(6, "Dia", SECONDS_IN_ONE_DAY),
        ...listScale(4, "Semana", SECONDS_IN_ONE_WEEK),
        ...listScale(6, "Mes", SECONDS_IN_ONE_MONTH),
        ...listScale(5, "Ano", SECONDS_IN_ONE_YEAR)
    ])
}