import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from "clsx";


export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-4 px-3 bg-blue rounded-xl font-semibold text-white-100 text-sm w-full transition-colors hover:bg-blue-300 focus:ring-2 ring-white-300',
    )}>{children}</Comp>
    )
}