import { twMerge } from "tailwind-merge"

type HeaderLinkProps = {
    href: string
    children?: React.ReactNode
    className?: string
    active?: boolean
}

export default function HeaderLink({
    href,
    children,
    className,
} // active,
: HeaderLinkProps) {
    return (
        <a
            href={href}
            className={twMerge(
                "relative grid h-full w-24 place-items-center bg-[#ffd1d1] transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-[#a73030] after:transition-all hover:bg-[#ffa4a4] hover:after:w-full focus:after:w-full",
                // active ? "after:w-full" : "",
                className,
            )}
        >
            <div>{children}</div>
        </a>
    )
}
