import { FC } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { themeWhite } from "../../constants";
import { store, themeSelector, useAppSelector } from "../../reducer";

const MyThemeProvider: FC = ({ children }) => {

    const theme = useAppSelector(themeSelector.getState);


    return (
        <ThemeProvider theme={theme}>
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