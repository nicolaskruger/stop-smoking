import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_SOTRAGE } from "../../constants";
import { infoSet } from "./set/info.set";
import { infoSelector } from "./selector/info.selector";
import { getMyCookies } from "../../util";

export type InfoState = {
    cigarretsPerDay: number;
    cigarretsPerPack: number;
    yearsSmook: number;
    price: number;
    coin: string;
    declare: boolean;
}

const initialState: InfoState = getMyCookies(LOCAL_SOTRAGE.INFO) || {
    cigarretsPerDay: 25,
    cigarretsPerPack: 20,
    yearsSmook: 5,
    price: 10.0,
    coin: "BRL - Real brasileiro",
    declare: false
};

export const infoSlicer = createSlice({
    name: "info",
    initialState,
    reducers: {
        ...infoSet
    }
})

export const infoActions = infoSlicer.actions;

export const infoReducer = infoSlicer.reducer;

export {
    infoSelector
}
