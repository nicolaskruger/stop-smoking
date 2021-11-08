import { FC, useState } from "react";
import styled from "styled-components";
import { MyCircularProgressBar } from "../../..";
import { BsThreeDotsVertical } from "react-icons/bs";
import { themeSelector, useAppSelector } from "../../../../reducer";
import { SelectScale } from "../../../select/scale/select-scate";

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
const Warper = styled.div`
    position: relative;
`;

const WarperSection = styled.div`
    position: absolute;
    right: 0;
    top: 20px;
`;

const CronTop: FC = () => {

    const { textColor01 } = useAppSelector(themeSelector.getState);

    const [show, setShow] = useState(false);

    return (
        <Div>
            <Span>
                Dia 2
            </Span>
            <MyCircularProgressBar />
            <Warper  >
                <Button onClick={() => setShow(val => !val)} >
                    <BsThreeDotsVertical size={20} color={textColor01} />
                </Button>
                <WarperSection>
                    <SelectScale show={show} setShow={setShow} />
                </WarperSection>
            </Warper>
        </Div>
    )
}

export {
    CronTop
}