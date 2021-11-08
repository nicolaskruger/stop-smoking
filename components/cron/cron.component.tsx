import { FC } from "react";
import { Box, MyCircularProgressBar } from "..";
import { useTick } from "../../hooks";
import { CronTop } from "./section";

const Cron: FC = () => {

    useTick();

    return (
        <Box>
            <CronTop />
        </Box>
    )
}

export {
    Cron
}