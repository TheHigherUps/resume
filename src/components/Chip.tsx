import classNames from "classnames"

type ChipProps = {
    className?: string
    children?: React.ReactNode
    text: string
}

export default function Chip(props: ChipProps) {
    const { text, className, children } = props

    return (
        <div
            className={classNames(
                "rounded-full bg-slate-50 px-3 py-2",
                className,
            )}
        >
            <p className="text-sm">{text}</p>
            {children}
        </div>
    )
}
