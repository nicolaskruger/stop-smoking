import { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
import { Input, InputProps } from "..";
import { EnumDictionary } from "../../../util";

enum InputCadState {
    NORMAL,
    ERRO,
    FOCUS
};
interface InputCadProps extends InputProps {
    state: InputCadState;
}

type MyInputProps = {
    state: InputCadState
}

const InputCadColor: EnumDictionary<InputCadState, (theme: DefaultTheme) => string> = {
    [InputCadState.ERRO]: (theme) => theme.colorErro,
    [InputCadState.FOCUS]: (theme) => theme.color02,
    [InputCadState.NORMAL]: (theme) => theme.textColor01,
}

const MyInput = styled(Input) <MyInputProps>`
    border: 0;
    border-bottom: ${props => InputCadColor[props.state](props.theme)} 1px solid;
    caret-color: ${props => props.theme.color02};
    padding: 10px;
    outline: none;
`;

export const InputCad: FC<InputCadProps> = (props) => {
    return <MyInput {...props} />
}

export {
    InputCadState,
    InputCadColor
}

export type {
    MyInputProps
}

