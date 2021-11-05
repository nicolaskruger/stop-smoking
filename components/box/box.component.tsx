import styled from "styled-components";

const Box = styled.div`
    border-radius: 30px;
    padding: 20px;
    background-color: ${props => props.theme.backGround};
    box-shadow: 0px 0px 6px 0px #000000;
`;

export {
    Box
}