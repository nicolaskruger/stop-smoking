import { createSlice } from "@reduxjs/toolkit";
import { DefaultTheme } from "styled-components";
import { LOCAL_SOTRAGE, themeWhite } from "../../constants";
import { getMyCookies } from "../../util";
import { themeSelector } from "./selector/theme.selector";
import { themeSet } from "./set/theme.set";

const initialState: DefaultTheme = getMyCookies(LOCAL_SOTRAGE.THEME) || {
    ...themeWhite
}


export const themeSlicer = createSlice({
    name: "thems",
    initialState,
    reducers: {
        ...themeSet
    }
});

export const themeAction = themeSlicer.actions;
export const themeReducer = themeSlicer.reducer;

export {
    themeSelector
}