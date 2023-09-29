import {
    RiJavascriptFill,
    RiReactjsFill,
    RiHtml5Fill,
    RiCss3Fill,
    RiAngularjsFill,
} from "react-icons/ri"
import { BiLogoTypescript, BiLogoJava } from "react-icons/bi"

export const mainSkills = [
    {
        icon: RiHtml5Fill,
        percentage: "95%",
    },
    {
        icon: RiJavascriptFill,
        percentage: "80%",
    },
    {
        icon: RiCss3Fill,
        percentage: "75%",
    },
    {
        icon: RiReactjsFill,
        percentage: "60%",
    },
    {
        icon: BiLogoTypescript,
        percentage: "50%",
    },
    {
        icon: BiLogoJava,
        percentage: "11%",
        additionalText: "(Just Learning)",
    },
    {
        icon: RiAngularjsFill,
        percentage: "5%",
        additionalText: "(Just Learning)",
    },
]

export const projects = [
    {
        title: "TheHigherUps",
        subtitle: "2019 - current",
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing
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
        exercitationem!`,
        tags: ["TheHigherUps", "Shop", "Beans"],
        links: [
            {
                title: "Github",
                href: "https://github.com/TheHigherUps/octo-telegram",
            },
            {
                title: "Preview",
                href: "https://thehigherups.org",
            },
        ],
    },
    {
        title: "Firebase Admin Panel",
        subtitle: "2022",
        // description: `Lorem ipsum dolor sit amet consectetur adipisicing
        // elit. Vero iure pariatur eaque veniam doloremque
        // quam, natus nihil laboriosam asperiores. Ea ab
        // laboriosam sit quia est sequi delectus dolorum
        // deserunt praesentium unde fugit impedit commodi
        // consequuntur magnam numquam molestias ad, modi
        // optio! Omnis, similique dicta totam, nesciunt
        // perspiciatis nulla quam esse nostrum minus a tempore
        // rerum dolore enim. Porro veritatis ipsum labore
        // consequatur, dicta est fuga numquam maxime corporis
        // totam ipsa nesciunt omnis sapiente tempora voluptas!`,
        description:
            "Create, Delete and Manage users and global settings of your Firebase project with this self-hosted solution. Create your own custom settings on top of the base settings. Comes default with user lookup, user banning, ability to add custom user roles with special presets. Built using MaterialUI, this solution gives you a clean, easy to use interface that anyone can navigate. Look up and manage data for users in the entire Firebase database!",
        tags: ["Firebase", "MaterialUI", "React"],
        links: [
            {
                title: "Github",
                href: "https://github.com/TheHigherUps/admin-updated",
            },
            {
                title: "Preview",
                href: "https://admin.thehigherups.org",
            },
        ],
    },
    {
        title: "Calendar",
        subtitle: "2023",
        // description: `Lorem ipsum dolor sit amet, consectetur adipisicing
        // elit. Adipisci repellendus eligendi laboriosam
        // voluptatum inventore harum officiis aliquid debitis
        // deleniti laudantium, suscipit voluptate dolorem
        // iure! Odit illo perferendis velit animi dignissimos
        // officia quas aliquid quia doloribus asperiores,
        // omnis adipisci aliquam aperiam, quam praesentium
        // cumque commodi voluptas magnam ad maxime assumenda
        // sit.`,
        description: `A calendar system where you can create and update events. Each event can have their ownn unique title and description, as well as their own unique start date and time, and end date and time. Create custom categories for your events and organize events by priority or by time until they end. Support to connect with NTFY coming soon! Get notified when an event starts or ends with an NTFY server (self hosting only )`,
        tags: ["Supabase", "React", "NextJS"],
        links: [
            {
                title: "Github",
                href: "https://github.com/TheHigherUps/phi-calendar",
            },
            {
                title: "Preview(Not Available)",
                href: "#projects",
            },
        ],
    },
]
