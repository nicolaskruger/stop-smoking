import styled, { keyframes } from "styled-components";

const anime = keyframes`
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
`;

export const PulseLalbel = styled.label`
    background-color: ${props => props.theme.color01};
    color: ${props => props.theme.textColor02};
    padding: 15px;
    border-radius: 30px;
    animation: ${anime} 1s linear infinite;
`;