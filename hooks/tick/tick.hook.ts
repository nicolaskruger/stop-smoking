import { useEffect } from "react"
import { useAppDispatch } from "../../reducer"
import { cronAction } from "../../reducer/cron/cron.slicer";

const useTick = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(cronAction.currDate());
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, [])
}

export {
    useTick
}