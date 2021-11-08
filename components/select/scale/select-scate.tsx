import { FC, MouseEvent, useState } from "react";
import styled from "styled-components";
import { cronAction, cronSelector, ScaleDto, useAppDispatch } from "../../../reducer";

type Props = {
    show: boolean,
    setShow: (val: boolean) => void
}

type UlProps = {
    show: boolean
}

const Ul = styled.ul<UlProps>`
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
`;

const Button = styled.button`
    background-color: ${props => props.theme.backGround};
    border: 0;
    margin: 0;
    padding: 5px;
    width: 100px;
    height: 29px;
    transition: 200ms;
    color: ${props => props.theme.textColor01};
    cursor: pointer;
    :hover{
        background-color: ${props => props.theme.backGround01};
    }
`;

const SelectScale: FC<Props> = ({ show, setShow }) => {

    const dispatch = useAppDispatch();

    const list = cronSelector.getScales();

    const handleClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, val: ScaleDto) => {
        event.preventDefault();
        dispatch(cronAction.setScale(val))
        setShow(false)
    }

    return (
        <Ul show={show}>
            {list.map(val => (
                <li key={val.name}>
                    <Button type="button" onClick={(event) => handleClick(event, val)}>
                        {val.name}
                    </Button>
                </li>
            ))}
        </Ul>
    );
}

export {
    SelectScale
}