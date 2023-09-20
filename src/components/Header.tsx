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
            { label: "Expierence", href: "/#exp" },
            { label: "Projects", href: "/#projects" },
            { label: "Contact", href: "/#contact" },
        ],
        []
    )
    return (
        <header className="w-full h-16 bg-red-500 drop-shadow-2xl border-b border-black fixed z-10 ">
            <div className="h-full px-4 md:px-16 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white drop-shadow-2xl shadow-black">
                    Ms Paley
                </h1>
                <nav className="h-full">
                    <button
                        onClick={() => setNavOpen((prevState) => !prevState)}
                        className={classNames(
                            `flex flex-col gap-2 justify-center items-center h-full md:hidden`
                        )}
                    >
                        <div
                            className={classNames(
                                `w-8 h-1 bg-white rounded-full duration-500 ${
                                    navOpen
                                        ? "-rotate-[225deg] translate-y-3"
                                        : ""
                                } ${
                                    disableAnimation
                                        ? "transition-none"
                                        : "transition-all"
                                }`
                            )}
                        ></div>
                        <div
                            className={classNames(
                                `w-8 h-1 bg-white rounded-full duration-500  ${
                                    navOpen
                                        ? "opacity-100 translate-x-0 -rotate-[225deg]"
                                        : ""
                                } ${
                                    disableAnimation
                                        ? "transition-none"
                                        : "transition-all"
                                }`
                            )}
                        ></div>
                        <div
                            className={classNames(
                                `w-8 h-1 bg-white rounded-full duration-500 ${
                                    navOpen
                                        ? "-rotate-[315deg] -translate-y-3"
                                        : ""
                                } ${
                                    disableAnimation
                                        ? "transition-none"
                                        : "transition-all"
                                }`
                            )}
                        ></div>
                    </button>
                    {/* MOBILE NAV */}
                    <div
                        className={classNames(
                            `h-screen border-l border-black  right-0 top-16 bg-red-500 md:hidden overflow-hidden fixed z-10 ${
                                disableAnimation ? "" : "transition-all"
                            } ${navOpen ? "w-[330px]" : "w-0 border-none"} `
                        )}
                        aria-hidden={!navOpen}
                    >
                        <ul className="flex flex-col gap-2 w-full h-full">
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
                                        (prevState) => !prevState
                                    )
                                }
                                className="justify-self-end h-10 w-full "
                            >
                                {disableAnimation
                                    ? "Enable Animation"
                                    : "Disable Animation"}
                            </button>
                        </ul>
                    </div>

                    <ul className="md:flex gap-2 h-full hidden">
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
