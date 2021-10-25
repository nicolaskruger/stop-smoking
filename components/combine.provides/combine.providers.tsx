import { FC } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { themeWhite } from "../../constants";
import { store } from "../../reducer";

const MyThemeProvider: FC = ({ children }) => {
    return (
        <ThemeProvider theme={themeWhite}>
            {children}
        </ThemeProvider>
    )

}

const CombineProvider: FC = ({ children }) => {
    return (
        <Provider store={store}>
            <MyThemeProvider>
                {children}
            </MyThemeProvider>
        </Provider>
    )
}

export {
    CombineProvider
}