import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { DefaultTheme } from "styled-components";
import { cronReducer, CronState } from "..";
import { LOCAL_SOTRAGE } from "../../constants";
import { setMyCookies } from "../../util/cookies/cookies.utils";
import { infoReducer, InfoState } from "../info/info.slicer";
import { themeReducer } from "../theme/theme.slicer";


export const store = configureStore({
    reducer: {
        info: infoReducer,
        theme: themeReducer,
        cron: cronReducer
    }
})

store.subscribe(() => {
    setMyCookies<InfoState>(store.getState().info, LOCAL_SOTRAGE.INFO);
    setMyCookies<DefaultTheme>(store.getState().theme, LOCAL_SOTRAGE.THEME);
    setMyCookies<CronState>(store.getState().cron, LOCAL_SOTRAGE.CRON)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;