import { useState } from "react"


type FormCarInfoReturn = {
    value: number,
    erro: string,
    setValue: (value: number) => void,
    activeErro: () => void
}

const useFormCadInfo = (_value: number, _erro: string): FormCarInfoReturn => {
    const [value, setValue] = useState(_value);
    const [erro, setErro] = useState("")
    const activeErro = () => {
        setErro(_erro)
    }

    return {
        value,
        erro,
        setValue,
        activeErro
    }
}

export type {
    FormCarInfoReturn
}

export {
    useFormCadInfo
}