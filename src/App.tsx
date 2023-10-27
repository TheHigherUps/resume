import Header from "./components/Header"
import {
    RiJavascriptFill,
    RiReactjsFill,
    RiHtml5Fill,
    RiCss3Fill,
} from "react-icons/ri"
import { BiLogoTypescript } from "react-icons/bi"
import { motion } from "framer-motion"
import { FAVORITE_GAME, OTHER_SKILLS, mainSkills, projects } from "./lib/data"
import Card from "./components/Card"
import Chip from "./components/Chip"
import Footer from "./components/Footer"
import ContactForm from "./components/ContactForm"

function App() {
    return (
        <>
            <Header />
            <main className="h-screen pt-16 ">
                <section
                    className="flex min-h-screen flex-col items-center gap-5 bg-[#272932] px-10 py-16 md:flex-row md:justify-evenly md:px-32 md:py-32"
                    id="home"
                >
                    <div className="min-h-fit min-w-fit">
                        <motion.img
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", bounce: 0.75 }}
                            className="h-44 w-44 rounded-full border-8 border-red-500 md:h-64 md:w-64 "
                            src="./me.jpeg"
                            alt="Picture of Layne Rigano"
                        />
                    </div>
                    <div className="text-white ">
                        {/* <p className="text-xl md:text-5xl">Alexandria Paley</p> */}
                        <div className="flex gap-2">
                            <motion.p
                                initial={{ x: 250, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="text-3xl md:text-5xl"
                                transition={{ delay: 0.25 }}
                            >
                                Hey!
                            </motion.p>

                            <motion.p
                                initial={{ y: 250, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-3xl md:text-5xl"
                                transition={{ delay: 0.5 }}
                            >
                                My names Layne!
                            </motion.p>
                        </div>

                        <br />
                        <motion.p
                            initial={{ y: 250, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.75 }}
                            className="text-lg leading-10 md:text-xl"
                        >
                            Im a full-stack web developer who loves to have fun
                            bulding websites and making projects.
                        </motion.p>
                    </div>
                </section>
                <section
                    className="flex min-h-screen flex-col justify-center px-5 py-10 md:px-20"
                    id="about"
                >
                    {/* <div className="text-red-500 text-4xl">About Me</div> */}
                    <div className="text-4xl text-red-500">About Me</div>
                    <br />
                    <p className="text-lg leading-10">
                        I am a full-stack web developer who mostly uses react
                        currently, but sometimes I like to go back to the basics
                        and use plain HTML, CSS, and JavaScript. I started to
                        learn front-end web developent and self taught myself
                        back in 2021. I began making very small websites with my
                        friends. We would joke around and I have would have a
                        good time making them. I then started to take web
                        development seriously as I started to enjoy it more. I
                        wanted to learn the newest things when it came to web
                        development and was excited everytime I found something
                        new. I started back-end development in late 2022 as I
                        wanted to build more complex websites and apps. Learning
                        backend web development felt so new to me and re-ignited
                        the spark to keep me going and push forward through
                        learning web development and learning to code.
                        <br />I also love to play video games and spend a lot of
                        the free time that I have either coding or playing
                        games. Right now my favorite game is{" "}
                        <span className="rounded-full bg-neutral-200 px-2 py-1 font-bold">
                            {FAVORITE_GAME}
                        </span>{" "}
                        and I am always willing to try new things and play new
                        games.
                        <br />
                        Working in projets with mulitple people is also
                        something I enjoy. I find it so much easier to create
                        something when there are amazing ideas coming from
                        multiple people and enjoy giving others positive
                        feedback and coming up with ideas that everyone will
                        enjoy.
                    </p>
                </section>
                <section
                    className=" bg-[#272932] px-5 py-10 text-white md:px-20"
                    id="experience"
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
                            <img
                                className="w-[48px]"
                                src="./firebase.svg"
                                alt="firebase logo"
                            />
                        </motion.div>
                        {/* from #d0433f - to #a73a37 */}
                    </div>
                    <br />
                    <p className="text-lg leading-10">
                        I have spent a lot of time working in plain HTML, CSS,
                        and JavaScript and have a powerful understanding of the
                        languages and how to use them. I have recently switched
                        to React and using JavaScript frameworks to better
                        improve my workflow. I have a powerful knowledge in
                        using React, Vite, NextJS, Astro, and many other
                        frameworks that are similar. I love to learn new
                        framworks all the time and see what are the best options
                        for me as a web developer. I am always eager to learn
                        more and will search for things that I haven't learned
                        yet. I like to make sure my sites are accessablie for as
                        many people as possible and spend a decent amount of
                        time making sure people with disabilities are still able
                        to interact with the websites that I build.
                    </p>
                    <br />
                    <div className="flex flex-col gap-5" id="main-skills">
                        <p className="text-2xl">Main Skills</p>
                        <hr />
                        {/*  */}
                        {mainSkills.map((skill, index) => {
                            return (
                                <div
                                    className="flex w-full items-center"
                                    key={index}
                                >
                                    <skill.icon size={54} />
                                    <div className="h-5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                        <motion.div
                                            transition={{
                                                delay: 0.05 * index,
                                                type: "spring",
                                                bounce: 0.25,
                                            }}
                                            className="h-5 rounded-full bg-blue-600"
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.percentage}`,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <p className="float-right mx-3">
                                                {skill.percentage}
                                            </p>
                                        </motion.div>
                                        {/* <div className="bg-blue-600 h-5 rounded-full w-[95%]">
                                    <p className="float-right mx-3">95%</p>
                                </div> */}
                                    </div>
                                </div>
                            )
                        })}

                        <br />
                        <div>
                            <p className="mb-5 text-2xl">Other Skills</p>
                            <hr />
                            <ul className="grid list-disc auto-rows-auto grid-cols-2 gap-5 text-xl leading-10">
                                {OTHER_SKILLS.map((skill, index) => {
                                    return (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{ delay: 0.05 * index }}
                                            viewport={{ once: true }}
                                        >
                                            {skill}
                                        </motion.li>
                                    )
                                })}
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
                    {projects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.05 * index }}
                                viewport={{ once: true }}
                            >
                                <br />
                                <Card key={index}>
                                    <div className="text-3xl">
                                        {project.title}
                                    </div>
                                    <p className="text-lg text-gray-500">
                                        {project.subtitle}
                                    </p>
                                    <p className="leading-10">
                                        {project.description}
                                    </p>
                                    <div className="my-2 flex gap-2">
                                        {project.tags.map((tag, index) => {
                                            return (
                                                <Chip key={index} text={tag} />
                                            )
                                        })}
                                    </div>
                                    <div className="flex gap-5">
                                        {project.links.map((link, index) => {
                                            return (
                                                <a
                                                    key={index}
                                                    className="rounded-lg p-3 text-blue-700 underline duration-200 hover:bg-blue-50 active:bg-blue-200"
                                                    href={link.href}
                                                    target="_blank"
                                                >
                                                    {link.title}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </section>
                <section
                    className=" flex flex-col gap-5 bg-[#272932] px-5 py-10 text-white md:px-20"
                    id="contact"
                >
                    <ContactForm />
                </section>
                <Footer />
            </main>
        </>
    )
}

export default App
