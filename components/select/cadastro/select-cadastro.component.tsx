import { FC } from "react";
import styled from "styled-components";
import { OptionsCoins, Select, SelectProps } from "..";

const StyleSelect = styled(Select)`
    
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