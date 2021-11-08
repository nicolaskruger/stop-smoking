import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { DefaultTheme } from "styled-components";
import { LOCAL_SOTRAGE } from "../../constants";
import { setMyCookies } from "../../util/cookies/cookies.utils";
import { infoReducer, InfoState } from "../info/info.slicer";
import { themeReducer } from "../theme/theme.slicer";
import { cronReducer, CronState } from "../cron/cron.slicer";

export const store = configureStore({
    reducer: {
        info: infoReducer,
        theme: themeReducer,
        cron: cronReducer
    }
})

store.subscribe(() => {
    const { info, theme, cron } = store.getState();
    setMyCookies<InfoState>(info, LOCAL_SOTRAGE.INFO);
    setMyCookies<DefaultTheme>(theme, LOCAL_SOTRAGE.THEME);
    setMyCookies<CronState>(cron, LOCAL_SOTRAGE.CRON)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;