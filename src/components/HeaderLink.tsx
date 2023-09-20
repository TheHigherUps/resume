import { twMerge } from "tailwind-merge"

type HeaderLinkProps = {
    href: string
    children?: React.ReactNode
    className?: string
}

export default function HeaderLink({
    href,
    children,
    className,
}: HeaderLinkProps) {
    return (
        <a
            href={href}
            className={twMerge(
                "h-full bg-[#ffd1d1] hover:bg-[#ffa4a4] transition-colors w-24 grid place-items-center relative after:absolute focus:after:w-full after:bottom-0 after:left-0 after:w-0 after:bg-[#a73030] after:h-1 after:transition-all hover:after:w-full",
                className
            )}
        >
            <div>{children}</div>
        </a>
    )
}
