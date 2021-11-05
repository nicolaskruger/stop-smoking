import { FC } from "react"
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import styled from "styled-components";
import { themeSelector, useAppSelector } from "../../reducer";

const Div = styled.div`
    width: 30vw;
    height: 30vw;
`;

const Span = styled.span`
    font-size: 7vw;
    color: ${props => props.theme.color02};
`;

type Props = {
    percent: number
}

const MyCircularProgressBar: FC<Props> = ({ percent }) => {
    const { backGround01, color02 } = useAppSelector(themeSelector.getState);
    return (
        <Div>
            <CircularProgressbarWithChildren
                value={percent}
                styles={buildStyles({
                    rotation: -0.25,
                    strokeLinecap: 'butt',
                    pathTransitionDuration: 0.5,
                    pathColor: color02,
                    trailColor: backGround01,
                    backgroundColor: backGround01,
                })}
            >
                <Span>
                    { }
                    {`${percent}%`}
                </Span>
            </CircularProgressbarWithChildren>
        </Div>
    );
}

export {
    MyCircularProgressBar
}