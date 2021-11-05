import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import { LOCAL_SOTRAGE } from "../../constants"
import { getMyCookies } from "../../util"

const SECONDS_IN_ONE_DAY = 86400;

export type CronState = {
    currDate: Date,
    stopDate: Date,
    scale: number,
}

const configInitialState = (state: CronState): CronState => {
    return state ? ({
        ...state,
        currDate: new Date(state.currDate),
        stopDate: new Date(state.stopDate)
    }) : ({
        currDate: new Date(),
        stopDate: new Date(),
        scale: SECONDS_IN_ONE_DAY
    })
}

const initialState: CronState = configInitialState(getMyCookies<CronState>(LOCAL_SOTRAGE.CRON));

export const cronSlicer = createSlice({
    name: "cron",
    initialState,
    reducers: {
        stopDate: (state: CronState): CronState => ({ ...state, stopDate: new Date() }),
        currDate: (state: CronState): CronState => ({ ...state, currDate: new Date() })
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
    getScales: (): ScaleDto[] => ([
        ...range(6, 1).map((val): ScaleDto => ({
            name: `${val} Dia`,
            scale: SECONDS_IN_ONE_DAY * val
        }))
    ])
}