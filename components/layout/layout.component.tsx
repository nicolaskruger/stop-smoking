import { FC } from "react";
import { Background, Container, RedirectRouter } from "..";

type Props = {
    ligth?: boolean
}

const Layout: FC<Props> = ({ children, ligth = true }) => {
    return (
        <Background ligth={ligth}>
            <Container>
                {children}
            </Container>
        </Background>
    )
}

export {
    Layout
}