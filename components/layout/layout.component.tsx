import { FC } from "react";
import { Background, Container, RedirectRouter } from "..";

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