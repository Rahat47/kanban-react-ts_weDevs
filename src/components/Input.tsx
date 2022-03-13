import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    htmlFor: string;
    ref?: React.Ref<HTMLInputElement>;
}

const Input: FC<Props> = props => {
    return (
        <div>
            <label htmlFor={props.htmlFor ?? "list_title"} className="sr-only">
                {props.label}
            </label>
            <input
                type={props.type ?? "text"}
                name={props.name ?? "list_title"}
                id={props.htmlFor ?? "list_title"}
                className="mt-4 block w-full rounded-md border-gray-300 shadow-sm placeholder:font-body focus:border-primary-black focus:ring-primary-black sm:text-sm"
                placeholder={props.placeholder ?? "Enter list title"}
                {...props}
                autoFocus
            />
        </div>
    );
};

export default Input;
