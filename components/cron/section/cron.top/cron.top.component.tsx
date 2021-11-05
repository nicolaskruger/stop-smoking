import { FC } from "react";
import styled from "styled-components";
import { MyCircularProgressBar } from "../../..";
import { BsThreeDotsVertical } from "react-icons/bs";
import { themeSelector, useAppSelector } from "../../../../reducer";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Span = styled.span`
`;

const Button = styled.button`
    width: 30px;
    height: 30px;
    border: 0;
    background-color: ${props => props.theme.backGround};
    cursor: pointer;
    padding: 0;

`

const CronTop: FC = () => {

    const { textColor01 } = useAppSelector(themeSelector.getState);

    return (
        <Div>
            <Span>
                Dia 2
            </Span>
            <MyCircularProgressBar percent={66} />
            <Button>
                <BsThreeDotsVertical size={20} color={textColor01} />
            </Button>
        </Div>
    )
}

export {
    CronTop
}