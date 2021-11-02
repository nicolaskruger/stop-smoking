import { DefaultTheme } from "styled-components";
import { themeWhite } from "../../../constants";

const themeSet = {
    setWhite: (state: DefaultTheme): DefaultTheme => ({ ...themeWhite })
}

export {
    themeSet
}