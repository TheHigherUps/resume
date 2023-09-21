import Header from "./components/Header"
import {
    RiJavascriptFill,
    RiReactjsFill,
    RiHtml5Fill,
    RiCss3Fill,
    RiAngularjsFill,
} from "react-icons/ri"
import { BiLogoTypescript, BiLogoJava } from "react-icons/bi"
import { motion } from "framer-motion"

function App() {
    return (
        <>
            <Header />
            <main className="h-screen pt-16 ">
                <section
                    className="flex h-screen flex-col items-center gap-5 bg-[#272932] px-10 py-16 md:flex-row md:justify-evenly md:px-32 md:py-32"
                    id="home"
                >
                    <div className="min-h-fit min-w-fit">
                        <img
                            className="h-36 w-36 rounded-full border-8 border-red-500 md:h-64 md:w-64 "
                            src="./paley.webp"
                        />
                    </div>
                    <div className="text-white ">
                        {/* <p className="text-xl md:text-5xl">Alexandria Paley</p> */}
                        <p className="text-xl md:text-5xl">Lorem, ipsum.</p>
                        <br />
                        <p className="md:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias ex, atque saepe odio fugiat enim earum
                            dolore nisi reprehenderit totam accusamus voluptas
                            aliquid ducimus iure doloribus recusandae fugit non!
                            Officiis!
                        </p>
                    </div>
                </section>
                <section className="px-5 py-10 md:px-20" id="about">
                    {/* <div className="text-red-500 text-4xl">About Me</div> */}
                    <div className="text-4xl text-red-500">Quasi, placeat</div>
                    <br />
                    <p className="text-lg leading-10">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Cumque possimus, distinctio, tempore blanditiis
                        exercitationem earum, soluta quidem adipisci culpa animi
                        ad optio! Ratione eos a iusto inventore impedit magnam
                        earum aliquam, atque modi, quas, odit ex reprehenderit
                        delectus rem alias. Sapiente voluptates facilis amet
                        praesentium numquam odio eaque dolore dolorum
                        voluptatibus, omnis hic! Esse autem voluptate quisquam!
                        Odio provident velit fugit, magni totam debitis impedit
                        repudiandae quidem maiores libero doloremque nemo
                        quisquam, voluptates et autem aspernatur facilis illum,
                        facere a porro odit laborum! Fugiat distinctio ratione
                        officiis aliquam omnis fuga perferendis soluta corrupti
                        inventore dolorum? Sint nam in alias dolores, laborum
                        unde. Possimus vero provident nulla illo iste voluptatem
                        nemo, vel pariatur numquam ab sapiente delectus in,
                        minima amet culpa neque commodi soluta cupiditate sit
                        officia repellendus totam quas voluptates consequuntur.
                        Modi voluptatem quae vitae repellat est adipisci
                        nesciunt itaque consequatur, sint maxime voluptates
                        ipsum odit ab aliquam eaque assumenda expedita eum
                        repellendus corrupti veritatis ratione magni
                        perspiciatis distinctio quia. Accusantium et nostrum non
                        modi atque impedit similique sunt, repudiandae ad
                        dolorum unde cum necessitatibus laborum enim consectetur
                        consequatur blanditiis reiciendis, qui praesentium vitae
                        facilis magni? Dolorum sit ducimus, veniam sapiente, est
                        nesciunt distinctio officiis tenetur dicta, blanditiis
                        error quod!
                    </p>
                </section>
                <section
                    className=" bg-[#272932] px-5 py-10 text-white md:px-20"
                    id="exp"
                >
                    <div className="text-4xl">Experience and Skills</div>
                    <br />
                    <div className="grid grid-cols-2 grid-rows-3 place-items-center gap-y-32 md:grid-cols-3 md:grid-rows-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            <RiJavascriptFill
                                className="text-[#f7df1e]"
                                size={64}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            <BiLogoTypescript
                                className="text-[#007acc]"
                                size={64}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <RiHtml5Fill className="text-[#e34c26]" size={64} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                        >
                            <RiCss3Fill className="text-[#04a4ef]" size={64} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <RiReactjsFill
                                size={64}
                                className="animate-react text-[#3a87cb]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.25 }}
                        >
                            <RiAngularjsFill
                                className="text-[#dd1b16]"
                                size={64}
                            />
                        </motion.div>
                        {/* from #d0433f - to #a73a37 */}
                    </div>
                    <br />
                    <p className="text-lg leading-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt laboriosam libero, ullam nulla, nemo id
                        assumenda possimus incidunt fugit veritatis dolorum
                        recusandae neque laborum vitae qui. Nemo voluptate
                        corrupti aspernatur! Amet vero at neque facere. Sint,
                        aliquid. Similique minima veritatis dolore debitis
                        excepturi praesentium sed inventore quod laboriosam,
                        dolorum cumque soluta vitae iure est deleniti modi?
                        Consequatur, debitis. Vel nulla porro animi voluptatem,
                        accusantium beatae sunt eum earum reiciendis maxime a
                        error tempore eaque ea ipsa. Sequi repellendus officiis
                        amet et, placeat hic inventore voluptatibus? Porro, fuga
                        dolor at laboriosam accusamus eligendi, nihil, fugit
                        repellat beatae aliquid nulla. Distinctio, nostrum?
                    </p>
                    <br />
                    <div className="flex flex-col gap-5">
                        <p className="text-2xl">Main Skills</p>
                        <hr />
                        <div className="flex w-full items-center">
                            <RiHtml5Fill size={54} />
                            <div className="h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <motion.div
                                    transition={{ delay: 0.25 }}
                                    className="h-5 rounded-full bg-blue-600"
                                    style={{ width: "0" }}
                                    whileInView={{ width: "95%" }}
                                >
                                    <p className="float-right mx-3">95%</p>
                                </motion.div>
                                {/* <div className="bg-blue-600 h-5 rounded-full w-[95%]">
                                    <p className="float-right mx-3">95%</p>
                                </div> */}
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <RiJavascriptFill size={54} />
                            <div className="h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <motion.div
                                    transition={{ delay: 0.25 }}
                                    className="h-5 rounded-full bg-blue-600"
                                    style={{ width: "0" }}
                                    whileInView={{ width: "80%" }}
                                >
                                    <p className="float-right mx-3">80%</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <RiCss3Fill size={54} />
                            <div className="h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <motion.div
                                    transition={{ delay: 0.25 }}
                                    className="h-5 rounded-full bg-blue-600"
                                    style={{ width: "0" }}
                                    whileInView={{ width: "75%" }}
                                >
                                    <p className="float-right mx-3">75%</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <RiReactjsFill size={54} />
                            <div className="h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <motion.div
                                    transition={{ delay: 0.25 }}
                                    className="h-5 rounded-full bg-blue-600"
                                    style={{ width: "0" }}
                                    whileInView={{ width: "60%" }}
                                >
                                    <p className="float-right mx-3">60%</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <BiLogoTypescript size={54} />
                            <div className="h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <motion.div
                                    transition={{ delay: 0.25 }}
                                    className="h-5 rounded-full bg-blue-600"
                                    style={{ width: "0" }}
                                    whileInView={{ width: "50%" }}
                                >
                                    <p className="float-right mx-3">50%</p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <BiLogoJava size={54} />
                            <div className="relative h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <motion.div
                                    transition={{ delay: 0.25 }}
                                    className="h-5 rounded-full bg-blue-600"
                                    style={{ width: "0" }}
                                    whileInView={{ width: "11%" }}
                                >
                                    <p className="ffloat-right absolute inset-0 mx-3">
                                        11% (Just Learning)
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex w-full items-center">
                            <RiAngularjsFill size={54} />
                            <div className="relative h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <motion.div
                                    transition={{ delay: 0.25 }}
                                    className="h-5 rounded-full bg-blue-600"
                                    style={{ width: "0" }}
                                    whileInView={{ width: "5%" }}
                                >
                                    <p className="ffloat-right absolute inset-0 mx-3">
                                        5% (Just Learning)
                                    </p>
                                </motion.div>
                                {/* <div className="bg-blue-600 h-5 rounded-full w-[5%] "> */}
                                {/* <p className="float-right mx-3 absolute inset-0">
                                        5% (Just Learning)
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        <br />
                        <div>
                            <p className="mb-5 text-2xl">Other Skills</p>
                            <hr />
                            <ul className="grid list-disc auto-rows-auto grid-cols-2 gap-5 text-xl leading-10">
                                <li>Accessible Web Design</li>
                                <li>Apache</li>
                                <li>Cybersecurity</li>
                                <li>Electron</li>
                                <li>Excel</li>
                                <li>Firebase</li>
                                <li>Git</li>
                                <li>Github </li>
                                <li>Java</li>
                                <li>Kotlin</li>
                                <li>Linux</li>
                                <li>MongoDB</li>
                                <li>NextJS</li>
                                <li>Responsive Web Design</li>
                                <li>NodeJS</li>
                                <li>Photoshop</li>
                                <li>PHP</li>
                                <li>PostgreSQL</li>
                                <li>Python</li>
                                <li>Search Engine Optimization</li>
                                <li>Server Management</li>
                                <li>SQL</li>
                                <li>Supabase</li>
                                <li>TailwindCSS</li>
                                <li>UI/UX Design</li>
                                <li>Vercel</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section
                    className=" bg-white px-5 py-10 text-black md:px-20"
                    id="projects"
                >
                    <p className="text-4xl text-red-500">Projects</p>
                    <hr className="my-5" />
                    <div>
                        <div className="text-3xl">TheHigherUps</div>
                        <p className="text-lg text-gray-500">2019 - now</p>
                        <p className="leading-10">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Fugiat quas ipsam cum placeat, animi quod
                            quasi libero tempore accusantium id in, error esse
                            unde quos doloribus provident veniam repudiandae
                            magnam ratione, sint fuga eos. Pariatur laboriosam
                            mollitia velit, earum molestias, consectetur impedit
                            deleniti quam cumque quasi quidem! Veniam voluptates
                            ullam voluptatum maxime labore. Nesciunt nemo earum
                            doloremque eligendi ratione repellendus sed, commodi
                            praesentium! Doloremque, consequuntur. Consequuntur
                            molestias rerum exercitationem blanditiis commodi
                            optio itaque dicta hic ex labore quaerat molestiae
                            dolorem et ullam ad, quisquam necessitatibus odio
                            officiis. Distinctio laborum aperiam expedita quas
                            animi ratione! Neque illum explicabo quas libero
                            exercitationem!
                        </p>
                        <div className="flex gap-5">
                            <a
                                className="text-blue-600 underline"
                                href="https://www.thehigherups.org"
                            >
                                -Link
                            </a>
                            <a
                                className="text-blue-600 underline"
                                href="https://www.thehigherups.org"
                            >
                                -Github
                            </a>
                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="text-3xl">Firebase Admin Panel</div>
                        <div className="text-lg text-gray-500">2022</div>
                        <p className="leading-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero iure pariatur eaque veniam doloremque
                            quam, natus nihil laboriosam asperiores. Ea ab
                            laboriosam sit quia est sequi delectus dolorum
                            deserunt praesentium unde fugit impedit commodi
                            consequuntur magnam numquam molestias ad, modi
                            optio! Omnis, similique dicta totam, nesciunt
                            perspiciatis nulla quam esse nostrum minus a tempore
                            rerum dolore enim. Porro veritatis ipsum labore
                            consequatur, dicta est fuga numquam maxime corporis
                            totam ipsa nesciunt omnis sapiente tempora voluptas!
                        </p>
                        <div className="flex gap-5">
                            <a
                                className="text-blue-600 underline"
                                href="/projects"
                            >
                                -Preview
                            </a>
                            <a
                                className="text-blue-600 underline"
                                href="/projects"
                            >
                                -Github
                            </a>
                        </div>
                    </div>
                    <br />
                    <div>
                        <div className="text-3xl">Calendar</div>
                        <div className="text-xl text-gray-500">2023</div>
                        <p className="leading-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Adipisci repellendus eligendi laboriosam
                            voluptatum inventore harum officiis aliquid debitis
                            deleniti laudantium, suscipit voluptate dolorem
                            iure! Odit illo perferendis velit animi dignissimos
                            officia quas aliquid quia doloribus asperiores,
                            omnis adipisci aliquam aperiam, quam praesentium
                            cumque commodi voluptas magnam ad maxime assumenda
                            sit.
                        </p>
                        <div className="flex gap-5">
                            <a
                                className="text-blue-600 underline"
                                href="/#projects"
                            >
                                -Preview
                            </a>
                            <a
                                className="text-blue-600 underline"
                                href="/#projects"
                            >
                                -Github
                            </a>
                        </div>
                    </div>
                </section>
                <section
                    className=" flex flex-col gap-5 bg-[#272932] px-5 py-10 text-white md:px-20"
                    id="contact"
                >
                    <div className="text-center text-4xl">Contact</div>
                    <p className="mx-auto mb-5 w-96">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex, magnam. Rem natus facilis magni quidem alias
                        deleniti repellat. Vitae omnis assumenda modi nesciunt
                        architecto voluptate?
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
                </section>
            </main>
        </>
    )
}

export default App
