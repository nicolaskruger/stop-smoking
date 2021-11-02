import { FC } from "react";
import styled from "styled-components";
import { OptionsCoins, Select, SelectProps } from "..";

const StyleSelect = styled(Select)`
    border: 0;
    border-bottom: ${props => props.theme.textColor01} 1px solid;
    padding: 10px;
    outline: none;
`;

const SelectCadastro: FC<SelectProps> = (props) => {
    return (
        <StyleSelect {...props}>
            <OptionsCoins />
        </StyleSelect>
    )
}

export {
    SelectCadastro
}