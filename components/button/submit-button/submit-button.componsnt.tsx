import { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { themeSelector, useAppSelector } from "../../../reducer";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    background-color: ${props => props.theme.color01};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0;
    border: 0;
    padding: 0;
`;

const SubmitButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {

    const { backGround } = useAppSelector(themeSelector.getState);

    return (
        <Button>
            <AiOutlineCheck size="20px" color={backGround} />
        </Button>
    )
}

export {
    SubmitButton
}