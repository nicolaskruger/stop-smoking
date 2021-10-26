import { useRouter } from "next/dist/client/router"
import { FC } from "react"
import { ROUTES_FRONTEND } from "../../../constants";
import { useAppSelector } from "../../../reducer";
import { infoSelector } from "../../../reducer/info/info.slicer";

const RedirectRouter: FC = ({ children }) => {
    const { pathname, ...router } = useRouter();

    const { HOME, CADASTRO_INFO } = ROUTES_FRONTEND;

    const define = useAppSelector(infoSelector.getDeclare);

    if (pathname !== CADASTRO_INFO && !define) {
        router.push(CADASTRO_INFO);
    }

    return (
        <>
            {children}
        </>
    )
}

export {
    RedirectRouter
}