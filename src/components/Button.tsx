import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-3 px-4 bg-blue rounded-xl font-semibold text-white-100 text-sm w-full transition-colors hover:bg-blue-300 focus:ring-2 ring-white-300',
            className
    )}
    {...props}
    >{children}</Comp>
    )
}