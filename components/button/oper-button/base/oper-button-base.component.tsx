import styled from "styled-components";

const OperButtonComponent = styled.button`
    cursor: pointer;
    background-color: ${props => props.theme.color02};
    border: 0;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: ${props => props.hidden ? "hidden" : "visible"};
`;

export {
    OperButtonComponent
}