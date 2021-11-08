import { FC } from "react"
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import styled from "styled-components";
import { cronSelector, themeSelector, useAppSelector } from "../../reducer";

const Div = styled.div`
    width: 30vw;
    height: 30vw;
`;

const Span = styled.span`
    font-size: 7vw;
    color: ${props => props.theme.color02};
`;

const Span00 = styled.span`
    font-size: 3vw;
    color: ${props => props.theme.textColor01};
`;


const MyCircularProgressBar: FC = () => {
    const { backGround01, color02 } = useAppSelector(themeSelector.getState);
    const scale = useAppSelector(cronSelector.getScale);
    const diff = useAppSelector(cronSelector.getTimeDiffSeconds)
    const percent = Math.round(diff / scale.scale * 100);
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
                    {`${percent}%`}
                </Span>
                <Span00>
                    {scale.name}
                </Span00>
            </CircularProgressbarWithChildren>
        </Div>
    );
}

export {
    MyCircularProgressBar
}