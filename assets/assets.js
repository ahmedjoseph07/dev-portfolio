// assets/assets.js

import user_image from "./user-image.jpg";
import profile_img from "./profile-img.jpg";

// Lucide React Icons
import {
    Globe,
    Palette,
    LayoutTemplate,
    Code2,
    GraduationCap,
    FolderGit2,
    FileCode2,
    Database,
    GitBranch,
    Cloud,
    Server,
    LayoutDashboard,
    Cpu,
    TerminalSquare,
} from "lucide-react";

import { FaReact, FaGithub } from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiNextdotjs,
    SiPostman,
    SiPostgresql,
    SiSupabase,
    SiPrisma,
} from "react-icons/si";

export const assets = {
    user_image,
    profile_img,
};

export const workData = [
    {
        title: "DormiDine - A Role Based Meal Management System",
        type: "Full Stack React.js Project",
        description:
            "A smart dining management system allowing students to register, view daily meals, and track expenses, with an intuitive and responsive UI for both users and admins.",
        bgImage: "/work-1.jpg",
        clientCode: "https://github.com/ahmedjoseph07/dormi-dine-client",
        serverCode: "https://github.com/ahmedjoseph07/dormi-dine-server",
        liveLink: "https://dormi-dine.web.app/",
    },
    {
        title: "Expensio - An AI Powered Budget Planning System",
        type: "Full Stack Next.js Project",
        description:
            "A modern budget management platform for tracking income and expenses, visualizing spending patterns, and managing accounts securely with authentication and cloud data storage.",
        bgImage: "/work-2.jpg",
        clientCode: "https://github.com/ahmedjoseph07/expensio",
        serverCode: "https://github.com/ahmedjoseph07/expensio",
        liveLink: "https://www.expensio-app.xyz/",
    },
    {
        title: "Recommendo - A Interactive Recommedation System ",
        type: "Full Stack React.js Project",
        description:
            "An intelligent recommendation platform where users can share queries, receive personalized suggestions, and interact with a community through an easy-to-use interface.",
        bgImage: "/work-3.jpg",
        clientCode: "https://github.com/ahmedjoseph07/recommendo-client",
        serverCode: "https://github.com/ahmedjoseph07/recommendo-server",
        liveLink: "https://recommendo-91de5.web.app/",
    },
];

export const serviceData = [
    {
        icon: <Globe />,
        title: "Backend Development",
        description:
            "Designing and building robust, scalable server-side applications with Node.js, Express & Next.js",
    },
    {
        icon: <Database />,
        title: "Database Design & Optimization",
        description:
            "Structuring and optimizing databases like MongoDB for efficiency, scalability, and security.",
    },
    {
        icon: <LayoutTemplate />,
        title: "API Development",
        description:
            "Creating secure and well-documented RESTful APIs for seamless data communication.",
    },
    {
        icon: <Palette />,
        title: "System Architecture",
        description:
            "Planning clean, maintainable, and scalable software architectures for long-term projects.",
    },
    {
        icon: <Code2 />,
        title: "Frontend Development",
        description:
            "Building modern, responsive, and user‑friendly interfaces with React.js, Next.js, and Tailwind CSS.",
    },
];

export const infoList = [
    {
        icon: <Code2 />,
        title: "Core Skills",
        description:
            "Node.js, Express.js, Next.js, MongoDB, PostgreSQL, Firebase, REST APIs, Database Design, System Design",
    },
    {
        icon: <GraduationCap />,
        title: "Education",
        description: "B.Sc. in Petroleum & Mining Engineering – CUET",
    },
    {
        icon: <FolderGit2 />,
        title: "Projects",
        description: "2+ Industry-level fullstack projects",
    },
];

export const toolsData = [
    // IDE & Dev Tools
    { icon: FileCode2, title: "VS Code" },
    { icon: FaGithub, title: "GitHub" },
    { icon: GitBranch, title: "Git" },

    // Frontend
    { icon: FaReact, title: "React" },
    { icon: SiNextdotjs, title: "Next.js" },
    { icon: SiTailwindcss, title: "Tailwind" },

    // Backend
    { icon: SiNodedotjs, title: "Node.js" },
    { icon: SiExpress, title: "Express.js" },

    // Database & Hosting
    { icon: SiMongodb, title: "MongoDB" },
    { icon: SiPostgresql, title: "PostgreSQL" },
    { icon: Cloud, title: "Firebase" },
    { icon: SiSupabase, title: "Supabase" },

    // API Testing
    { icon: SiPostman, title: "Postman" },

    // Extra
    { icon: Server, title: "Servers" },
    { icon: Cpu, title: "Databases" },
    { icon: TerminalSquare, title: "AI Tools" },
    { icon: SiPrisma, title: "Prisma" },
];
