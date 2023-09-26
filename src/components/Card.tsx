import classNames from "classnames"
import React from "react"

type CardProps = {
    className?: string
    children: React.ReactNode
}

export default function Card(props: CardProps) {
    const { children, className } = props
    return (
        <div
            className={classNames(
                "rounded-lg bg-slate-200 px-5 py-3",
                className,
            )}
        >
            {children}
        </div>
    )
}
