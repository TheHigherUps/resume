type ContactFormProps = {}

export default function ContactForm(props: ContactFormProps) {
    const {} = props

    return (
        <>
            <div className="text-center text-4xl">Contact</div>
            <p className="mx-auto mb-5 text-center sm:w-96">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                magnam. Rem natus facilis magni quidem alias deleniti repellat.
                Vitae omnis assumenda modi nesciunt architecto voluptate?
            </p>
            <form className="flex flex-col gap-10 text-black md:mx-auto md:w-96 ">
                <div className="relative">
                    <input
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
                    <input type="checkbox" id="captcha" />
                    <label htmlFor="captcha">i am not the robots</label>
                </div>
                <button className="rounded-lg bg-red-500 px-4 py-3 text-white transition-transform hover:-translate-y-1 active:translate-y-1">
                    Send!
                </button>
            </form>
        </>
    )
}
