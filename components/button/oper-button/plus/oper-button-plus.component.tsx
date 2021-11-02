import { ButtonHTMLAttributes, FC } from "react";
import { OperButtonComponent } from "..";
import { AiOutlinePlus } from "react-icons/ai";
import { themeSelector, useAppSelector } from "../../../../reducer";

const OperButtonPlus: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {

    const { backGround } = useAppSelector(themeSelector.getState);


    return (
        <OperButtonComponent {...props}>
            <AiOutlinePlus color={backGround} />
        </OperButtonComponent>
    );
}

export {
    OperButtonPlus
}