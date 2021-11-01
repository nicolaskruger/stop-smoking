import { FC } from "react";

type Props = {
    list: string[]
}

const Options: FC<Props> = (props) => {
    return (
        <>
            {props.list.map(val => (
                <option key={val} value={val}>
                    {val}
                </option>
            ))}
        </>
    );
}

export {
    Options
}