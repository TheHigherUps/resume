// import { BsCheck } from "react-icons/bs"
// import { TextField } from "./inputs"

type ContactFormProps = {}

export default function ContactForm(props: ContactFormProps) {
    const {} = props

    return (
        <>
            <div className="text-center text-4xl">Contact</div>
            <p className="mx-auto mb-5 text-center sm:w-96">
                Contact me here! Have a question, comment, or concern? Let me
                know by contacting me here! I do my best and try to respond as
                quickly as possible.
            </p>
            {/* <a
                className="text-center underline"
                href="mailto:classified@thehigherups.org"
                target="_blank"
            >
                Contact Me Here!
            </a> */}

            <form
                action="https://send.pageclip.co/WdsBHiPya4VMnf5lQvnaBXBTa5fUGo0J/resume"
                method="post"
                className="pageclip-form flex flex-col gap-10 text-black md:mx-auto md:w-96"
            >
                <div className="relative">
                    <input
                        name="name"
                        id="name"
                        className="peer w-full  rounded-lg px-4 py-3"
                        required
                    />
                    <label
                        htmlFor="name"
                        className="pointer-events-none absolute inset-0 top-[-75%] pl-2  text-xl text-white transition-all peer-invalid:top-1/4 peer-invalid:text-black peer-focus:top-[-75%] peer-focus:text-white"
                    >
                        Name
                    </label>
                </div>
                <div className="relative">
                    <input
                        name="email"
                        id="email"
                        className="peer w-full  rounded-lg px-4 py-3"
                        required
                    />
                    <label
                        htmlFor="email"
                        className="pointer-events-none absolute inset-0 top-[-75%] pl-2  text-xl text-white transition-all peer-invalid:top-1/4 peer-invalid:text-black peer-focus:top-[-75%] peer-focus:text-white"
                    >
                        Email
                    </label>
                </div>
                <div className="relative">
                    <input
                        name="message"
                        id="message"
                        className="peer w-full  rounded-lg px-4 py-3"
                        required
                    />
                    <label
                        htmlFor="message"
                        className="pointer-events-none absolute inset-0 top-[-75%] pl-2  text-xl text-white transition-all peer-invalid:top-1/4 peer-invalid:text-black peer-focus:top-[-75%] peer-focus:text-white"
                    >
                        Message
                    </label>
                </div>
                <div className="flex gap-5 text-white">
                    <input id="captcha" type="checkbox" required />
                    <label htmlFor="captcha">I am not a robot</label>
                </div>
                <button
                    type="submit"
                    className="pageclip-form__submit rounded-lg bg-red-500 px-4 py-3 text-white transition-transform hover:-translate-y-1 active:translate-y-1"
                >
                    Send!
                </button>
            </form>
        </>
    )
}
