import { InputHTMLAttributes, ReactNode } from "react";


export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 py-4 px-3 rounded-xl bg-white-200 w-full focus-within:ring-2 ring-blue-300">
            {props.children}
        </div>
    )
}

//function TextInputIcon() {}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className="bg-transparent flex-1 text-black text-xs placeholder:text-white-300 outline-none "
            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
}