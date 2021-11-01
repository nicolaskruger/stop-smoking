import { ChangeEvent, FC, SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    onChange: (val: any) => void
}

const Select: FC<SelectProps> = (props) => {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value);
    }

    return (
        <select {...props} onChange={handleChange}>
            {props.children}
        </select>
    );
}

export {
    Select
}