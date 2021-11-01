import { FC, useEffect, useState } from "react";
import { Coin } from "../../../../ts";
import { coinApi } from "../../../../util";
import { Options } from "../base/options.component";

const OptionsCoins: FC = () => {
    const [state, setState] = useState<Coin[]>([]);
    const { getCoinsName } = coinApi();

    const _set = async () => {
        setState(await getCoinsName());
    }

    useEffect(() => {
        _set()
    }, [])

    return <Options list={state.map(st => st.name)} />
}

export {
    OptionsCoins
}