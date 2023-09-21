import { useMemo, useState } from "react"
import HeaderLink from "./HeaderLink"
import classNames from "classnames"

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const [disableAnimation, setDisableAnimation] = useState(false)
    const pages = useMemo(
        () => [
            { label: "Home", href: "/#" },
            { label: "About", href: "/#about" },
            { label: "Experience", href: "/#experience" },
            { label: "Projects", href: "/#projects" },
            { label: "Contact", href: "/#contact" },
        ],
        [],
    )
    return (
        <header className="fixed z-10 h-16 w-full border-b border-black bg-red-500 drop-shadow-2xl ">
            <div className="flex h-full items-center justify-between px-4 md:px-16">
                <h1 className="text-2xl font-bold text-white shadow-black drop-shadow-2xl">
                    Ms Paley
                </h1>
                <nav className="h-full">
                    <button
                        onClick={() => setNavOpen((prevState) => !prevState)}
                        className={classNames(
                            `flex h-full flex-col items-center justify-center gap-2 md:hidden`,
                        )}
                    >
                        <div
                            className={classNames(
                                `h-1 w-8 rounded-full bg-white duration-500 ${
                                    navOpen
                                        ? "translate-y-3 -rotate-[225deg]"
                                        : ""
                                } ${
                                    disableAnimation
                                        ? "transition-none"
                                        : "transition-all"
                                }`,
                            )}
                        ></div>
                        <div
                            className={classNames(
                                `h-1 w-8 rounded-full bg-white duration-500  ${
                                    navOpen
                                        ? "translate-x-0 -rotate-[225deg] opacity-100"
                                        : ""
                                } ${
                                    disableAnimation
                                        ? "transition-none"
                                        : "transition-all"
                                }`,
                            )}
                        ></div>
                        <div
                            className={classNames(
                                `h-1 w-8 rounded-full bg-white duration-500 ${
                                    navOpen
                                        ? "-translate-y-3 -rotate-[315deg]"
                                        : ""
                                } ${
                                    disableAnimation
                                        ? "transition-none"
                                        : "transition-all"
                                }`,
                            )}
                        ></div>
                    </button>
                    {/* MOBILE NAV */}
                    <div
                        className={classNames(
                            `fixed right-0 top-16  z-10 h-screen overflow-hidden border-l border-black bg-red-500 md:hidden ${
                                disableAnimation ? "" : "transition-all"
                            } ${navOpen ? "w-[330px]" : "w-0 border-none"} `,
                        )}
                        aria-hidden={!navOpen}
                    >
                        <ul className="flex h-full w-full flex-col gap-2">
                            {pages.map((page) => {
                                return (
                                    <button
                                        onClick={() => setNavOpen(false)}
                                        key={page.label}
                                    >
                                        <HeaderLink
                                            href={page.href}
                                            className="w-full py-5"
                                        >
                                            {page.label}
                                        </HeaderLink>
                                    </button>
                                )
                            })}
                            <button
                                onClick={() =>
                                    setDisableAnimation(
                                        (prevState) => !prevState,
                                    )
                                }
                                className="h-10 w-full justify-self-end "
                            >
                                {disableAnimation
                                    ? "Enable Animation"
                                    : "Disable Animation"}
                            </button>
                        </ul>
                    </div>

                    <ul className="hidden h-full gap-2 md:flex">
                        {pages.map((page) => {
                            return (
                                <HeaderLink href={page.href}>
                                    {page.label}
                                </HeaderLink>
                            )
                        })}
                        {/* <HeaderLink href="/">Home </HeaderLink>
                        <HeaderLink href="/">About</HeaderLink>
                        <HeaderLink href="/">Things</HeaderLink>
                        <HeaderLink href="/">Ms Paley</HeaderLink> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
