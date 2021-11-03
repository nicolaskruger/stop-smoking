import styled from "styled-components";

type BackgroudProps = {
    ligth?: boolean
}

const Background = styled.div<BackgroudProps>`
    background-color: ${props => props.ligth ? props.theme.backGround : props.theme.backGround01};
`;

export {
    Background
}