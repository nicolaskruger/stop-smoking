import { FC, useState } from "react";
import styled from "styled-components";
import { InputCad, InputProps } from "..";

interface Props extends InputProps {
    label: string;
}

type LabelProps = {
    focus: boolean
}

const Label = styled.label<LabelProps>`
    color: ${props => props.focus ? props.theme.color02 : props.theme.textColor03};
    display: flex;
    flex-direction: column;
    font-size: 12px;
`;

export const InputAllInfoCad: FC<Props> = (props) => {

    const [focus, setFocus] = useState(false);

    return (
        <div>
            <Label focus={focus}>
                {props.label}
                <InputCad {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            </Label>
        </div>
    )
}