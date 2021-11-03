import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        backGround: string,
        backGround01: string,
        color01: string,
        color02: string,
        colorErro: string,
        textColor01: string,
        textColor02: string,
        textColor03: string
    }
}

export const themeWhite: DefaultTheme = {
    backGround: "white",
    backGround01: "whitesmoke",
    color01: "#1fc817",
    color02: "red",
    colorErro: "orange",
    textColor01: "black",
    textColor02: "white",
    textColor03: "gray"
}


