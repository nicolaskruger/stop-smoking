import { FC } from "react";
import styled from "styled-components";
import { Input, InputProps } from "..";

const MyInput = styled(Input)`
    border: 0;
    border-bottom: ${props => props.theme.textColor01} 1px solid;
    padding: 10px;
    outline: none;
    :focus{
        border-bottom: ${props => props.theme.color02} 1px solid;
    }
`;

export const InputCad: FC<InputProps> = (props) => {
    return <MyInput {...props} />
}