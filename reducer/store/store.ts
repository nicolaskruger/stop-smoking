import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { LOCAL_SOTRAGE } from "../../constants";
import { setLocalStorage } from "../../util";
import { setMyCookies } from "../../util/cookies/cookies.utils";
import { infoReducer, InfoState } from "../info/info.slicer";


export const store = configureStore({
    reducer: {
        info: infoReducer
    }
})

store.subscribe(() => {
    setMyCookies<InfoState>(store.getState().info, LOCAL_SOTRAGE.INFO)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;