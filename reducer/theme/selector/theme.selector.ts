import { RootState } from "../..";

const themeSelector = {
    getState: (state: RootState) => state.theme
}

export {
    themeSelector
}