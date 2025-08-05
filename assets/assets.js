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
} from "react-icons/si";

export const assets = {
    user_image,
    profile_img,
};

export const workData = [
    {
        title: "Dormi_Dine",
        description: "Full Stack React.js Project",
        bgImage: "/work-1.jpg",
    },
    {
        title: "Expensio",
        description: "Full Stack Next.js Project",
        bgImage: "/work-2.jpg",
    },
];

export const serviceData = [
    {
        icon: <Globe />,
        title: "Backend Development",
        description:
            "Designing and building robust, scalable server-side applications with Node.js, Express & Next.js",
        link: "",
    },
    {
        icon: <Database />,
        title: "Database Design & Optimization",
        description:
            "Structuring and optimizing databases like MongoDB for efficiency, scalability, and security.",
        link: "",
    },
    {
        icon: <LayoutTemplate />,
        title: "API Development",
        description:
            "Creating secure and well-documented RESTful APIs for seamless data communication.",
        link: "",
    },
    {
        icon: <Palette />,
        title: "System Architecture",
        description:
            "Planning clean, maintainable, and scalable software architectures for long-term projects.",
        link: "",
    },
];

export const infoList = [
    {
        icon: <Code2 />,
        iconDark: <Code2 />,
        title: "Core Skills",
        description:
            "Node.js, Express.js, Next.js, MongoDB, PostgreSQL, Firebase, REST APIs, Database Design, System Design",
    },
    {
        icon: <GraduationCap />,
        iconDark: <GraduationCap />,
        title: "Education",
        description: "B.Sc. in Petroleum & Mining Engineering – CUET",
    },
    {
        icon: <FolderGit2 />,
        iconDark: <FolderGit2 />,
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
    { icon: Cpu, title: "Optimization" },
    { icon: TerminalSquare, title: "CLI Tools" },
];
