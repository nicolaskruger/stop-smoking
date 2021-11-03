import { useState } from "react";
import { FormCarInfoReturn, useFormCadInfo } from "..";
import { InfoSimpleState, InfoState } from "../../../reducer";

export interface FormWithLabel extends FormCarInfoReturn {
    label: string,
    hidde: boolean
};

const useFormList = () => {
    const myLabel = [
        "Cigarros fumados por dia",
        "Cigarros num maço",
        "Anos a fumar",
        "Preço por maço"
    ]
    const myForm: FormWithLabel[] = [
        useFormCadInfo(25),
        useFormCadInfo(20),
        useFormCadInfo(5),
        useFormCadInfo(10)
    ].map((value, index): FormWithLabel => ({
        ...value,
        label: myLabel[index],
        hidde: (index === (3))
    }));

    const [coin, setCoin] = useState("");

    const validate = () => {
        let valid = true;
        myForm.forEach((val) => {
            if (val.value <= 0) {
                valid = false;
                val.activeErro()
            }
        })
        return valid;
    }

    const toDispatch = (): InfoSimpleState => ({
        cigarretsPerDay: myForm[0].value,
        cigarretsPerPack: myForm[1].value,
        yearsSmook: myForm[2].value,
        coin: coin,
        price: myForm[3].value
    })

    return {
        myForm,
        coin,
        setCoin,
        validate,
        toDispatch
    }
}

export {
    useFormList
}