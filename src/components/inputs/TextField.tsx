import classNames from "classnames"
import React, { forwardRef, useId } from "react"
import { cva, type VariantProps } from "class-variance-authority"

const componentStyles = cva("text-red-500", {
    variants: {
        variant: {
            oulined: "border border-black",
            standard: "",
            filled: "",
        },
        defaultVariants: {
            varient: "standard",
        },
    },
})

interface InputProps
    extends React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        VariantProps<typeof componentStyles> {
    label: string
}

const TextField = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, variant, label, ...props }, ref) => {
        const id = useId()
        return (
            <div>
                <input
                    id={id}
                    className={classNames(
                        componentStyles({ variant, className }),
                    )}
                    ref={ref}
                    {...props}
                />
                <label htmlFor={id}>{label}</label>
            </div>
        )
    },
)

export { TextField }
// export function Input(props: InputProps) {
//     return <input {...props} />
// }
