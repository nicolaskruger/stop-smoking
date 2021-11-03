import { FC, MouseEvent, useEffect } from "react";
import styled from "styled-components";
import { InputCad, InputCadColor, InputCadState, InputProps, MyInputProps } from "..";
import { useInputCad } from "../../../hooks";
import { LabelInput } from "../../../styles";
import { OperButtonPlus } from "../../button";
import { OperButtonLess } from "../../button/oper-button/less/OperButtonLess";

interface Props extends InputProps {
    label: string;
    erroMessage?: string;
    button?: boolean;
}

const Label = styled(LabelInput) <MyInputProps>`
    color: ${props => InputCadColor[props.state](props.theme)};
`;


const Div = styled.div`
    display: flex;
    gap: 10px;
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



    const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, action: (val: number) => number) => {
        event.stopPropagation();
        props.onChange(action)
    }

    const plus = (val: number) => val + 1;
    const less = (val: number) => val - 1;

    return (
        <div>
            <Label state={state}>
                {label}
                <Div>
                    <InputCad
                        state={state}
                        {...props}
                        onFocus={() => setState(InputCadState.FOCUS)}
                        onBlur={() => setState(InputCadState.NORMAL)}
                    />
                    <OperButtonLess type="button" onClick={(event) => handleClick(event, less)} hidden={props.button} />
                    <OperButtonPlus type="button" onClick={(event) => handleClick(event, plus)} hidden={props.button} />
                </Div>
                {erroMessage}
            </Label>
        </div>
    )
}