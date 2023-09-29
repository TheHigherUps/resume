import { BsCheck } from "react-icons/bs"
import { TextField } from "./inputs"

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
            <form className="flex flex-col gap-10 text-black md:mx-auto md:w-96 ">
                <div className="relative">
                    <input
                        id="name"
                        className="peer w-full  rounded-lg px-4 py-3"
                        required
                    />
                    <label
                        htmlFor=""
                        className="pointer-events-none absolute inset-0 top-[-75%] pl-2  text-xl text-white transition-all peer-invalid:top-1/4 peer-invalid:text-black peer-focus:top-[-75%] peer-focus:text-white"
                    >
                        Name
                    </label>
                </div>
                <div className="relative">
                    <input
                        id="email"
                        className="peer w-full  rounded-lg px-4 py-3"
                        required
                    />
                    <label
                        htmlFor=""
                        className="pointer-events-none absolute inset-0 top-[-75%] pl-2  text-xl text-white transition-all peer-invalid:top-1/4 peer-invalid:text-black peer-focus:top-[-75%] peer-focus:text-white"
                    >
                        Email
                    </label>
                </div>
                <div className="relative">
                    <input
                        id="message"
                        className="peer w-full  rounded-lg px-4 py-3"
                        required
                    />
                    <label
                        htmlFor=""
                        className="pointer-events-none absolute inset-0 top-[-75%] pl-2  text-xl text-white transition-all peer-invalid:top-1/4 peer-invalid:text-black peer-focus:top-[-75%] peer-focus:text-white"
                    >
                        Message
                    </label>
                </div>
                <div className="flex gap-5 text-white">
                    {/* <input
                        type="checkbox"
                        id="captcha"
                        className="after:left:1/2 after:white peer relative h-4 w-4 appearance-none overflow-hidden rounded-full border border-white text-red-500 transition-all duration-500 after:absolute after:left-1/2 after:top-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-red-500 after:transition-all after:duration-500 checked:after:h-full checked:after:w-full checked:after:opacity-100"
                    />
                    <BsCheck className="pointer-events-none absolute scale-0 select-none stroke-red-400 opacity-0 transition-all duration-700 peer-checked:scale-100 peer-checked:opacity-100" /> */}
                    <input id="captcha" type="checkbox" />
                    <label htmlFor="captcha">i am not the robots</label>
                </div>
                <button
                    type="submit"
                    className="rounded-lg bg-red-500 px-4 py-3 text-white transition-transform hover:-translate-y-1 active:translate-y-1"
                >
                    Send!
                </button>
                <label htmlFor="tolve">asdasd</label>
            </form>
        </>
    )
}
