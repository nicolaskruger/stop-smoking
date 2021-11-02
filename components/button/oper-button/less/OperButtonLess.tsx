import { ButtonHTMLAttributes, FC } from "react";
import { OperButtonComponent } from "..";
import { AiOutlineMinus } from "react-icons/ai";
import { themeSelector, useAppSelector } from "../../../../reducer";

const OperButtonLess: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {

    const { backGround } = useAppSelector(themeSelector.getState);


    return (
        <OperButtonComponent {...props}>
            <AiOutlineMinus color={backGround} />
        </OperButtonComponent>
    );
}

export {
    OperButtonLess
}