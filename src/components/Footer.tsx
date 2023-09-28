import { FaXTwitter, FaGithub, FaGoogle } from "react-icons/fa6"

type FooterProps = {}

export default function Footer(props: FooterProps) {
    const {} = props
    return (
        <footer className="flex h-10 items-center justify-between bg-red-500 px-3 py-10 text-white">
            <h1> &copy; TheHigherUps Classified</h1>
            <div className="flex gap-2">
                <a
                    href="https://www.twitter.com/TheHigherUpsOrg"
                    className="transition hover:scale-110 active:scale-90"
                    target="_blank"
                >
                    <FaXTwitter size={32} />
                </a>
                <a
                    href="https://www.github.com/thehigherups"
                    className="transition hover:scale-110 active:scale-90"
                    target="_blank"
                >
                    <FaGithub size={32} />
                </a>
                <a
                    href="https://www.g.dev/thehigherups"
                    className="transition hover:scale-110 active:scale-90"
                    target="_blank"
                >
                    <FaGoogle size={32} />
                </a>
            </div>
        </footer>
    )
}
