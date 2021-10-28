import { useState } from "react"
import { InputCadState } from "../../components/input"

const useInputCad = (newState: InputCadState = InputCadState.NORMAL): [InputCadState, (state: InputCadState) => void] => {
    const [state, setState] = useState(newState);
    const [erro, setErro] = useState(false);
    const _setState = (_state: InputCadState) => {
        switch (_state) {
            case InputCadState.NORMAL:
                if (erro) {
                    setState(InputCadState.ERRO)
                }
                else {
                    setState(InputCadState.NORMAL)
                }
                break;
            case InputCadState.ERRO:
                setState(InputCadState.ERRO)
                setErro(true)
                break;
            case InputCadState.FOCUS:
                if (erro) {
                    setState(InputCadState.ERRO)
                }
                else {
                    setState(InputCadState.FOCUS)
                }
            default:
                break;
        }
    }
    return [
        state,
        _setState
    ]
}

export {
    useInputCad
}