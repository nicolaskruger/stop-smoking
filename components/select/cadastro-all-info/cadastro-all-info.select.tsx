import { FC } from "react";
import styled from "styled-components";
import { SelectProps, SelectCadastro } from "..";
import { LabelInput } from "../../../styles";

type SelectAllInfoProps = SelectProps & {
    label: string
}

const Label = styled(LabelInput)`
    color: ${props => props.theme.textColor01};
`;

const SelectAllInfo: FC<SelectProps> = (props) => {
    return (
        <Label>
            Moeda
            <SelectCadastro {...props} />
        </Label>
    );
}

export {
    SelectAllInfo
}