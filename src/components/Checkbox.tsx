import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps {
}

export function Checkbox({}: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-white-200 rounded">
                <CheckboxPrimitive.Indicator asChild>
                    <Check weight='bold' className="h-5 w-5 text-blue"/>
                </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}