import { useRouter } from "next/dist/client/router"
import { FC, useEffect } from "react"
import { ROUTES_FRONTEND } from "../../../constants";
import { useAppSelector } from "../../../reducer";
import { infoSelector } from "../../../reducer/info/info.slicer";

const RedirectRouter: FC = ({ children }) => {
    const router = useRouter();

    const { pathname } = router;

    const { CADASTRO_INFO } = ROUTES_FRONTEND;

    const define = useAppSelector(infoSelector.getDeclare);

    useEffect(() => {
        if (pathname !== CADASTRO_INFO && !define) {
            router.push(CADASTRO_INFO);
        }
    }, [])



    return (
        <>
            {children}
        </>
    )
}

export {
    RedirectRouter
}