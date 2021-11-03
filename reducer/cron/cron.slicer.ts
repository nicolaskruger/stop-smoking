import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import { LOCAL_SOTRAGE } from "../../constants"
import { getMyCookies } from "../../util"

export type CronState = {
    currDate: Date,
    stopDate: Date
}

const configInitialState = (state: CronState): CronState => {
    return state ? ({
        currDate: new Date(state.currDate),
        stopDate: new Date(state.stopDate)
    }) : ({
        currDate: new Date(),
        stopDate: new Date(),
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

export const cronSelector = {
    getCurrState: (state: RootState) => state.cron.currDate,
    getStopState: (state: RootState) => state.cron.stopDate
}