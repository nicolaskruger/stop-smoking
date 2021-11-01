import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { InputCad, InputCadColor, InputCadState, InputProps, MyInputProps } from "..";
import { useInputCad } from "../../../hooks";
import { LabelInput } from "../../../styles";

interface Props extends InputProps {
    label: string;
    erroMessage?: string
}

const Label = styled(LabelInput) <MyInputProps>`
    color: ${props => InputCadColor[props.state](props.theme)};
`;

export const InputAllInfoCad: FC<Props> = (props) => {

    const { label } = props;

    const erroMessage = props.erroMessage || "";

    const [state, setState] = useInputCad();

    useEffect(() => {
        if (erroMessage) {
            setState(InputCadState.ERRO)
        }
    }, [erroMessage])


    return (
        <div>
            <Label state={state}>
                {label}
                <InputCad
                    state={state}
                    {...props}
                    onFocus={() => setState(InputCadState.FOCUS)}
                    onBlur={() => setState(InputCadState.NORMAL)}
                />
                {erroMessage}
            </Label>
        </div>
    )
}