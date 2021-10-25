import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        textColor: string,
        backGround: string,
        color01: string,
        color02: string
    }
}

export const themeWhite: DefaultTheme = {
    textColor: "black",
    backGround: "white",
    color01: "green",
    color02: "red"
}


