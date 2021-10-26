import { FC } from "react";
import { Background, Container } from "..";

const Layout: FC = ({ children }) => {
    return (
        <Background>
            <Container>
                {children}
            </Container>
        </Background>
    )
}

export {
    Layout
}