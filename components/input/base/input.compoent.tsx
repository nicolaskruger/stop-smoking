import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (val: any) => void,
};

export const Input: FC<InputProps> = (props) => {



    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    }

    return (
        <input {...props} onChange={onChange} />
    );
}

export type { InputProps };
