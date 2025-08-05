import user_image from "./user-image.jpg";
import profile_img from "./profile-img.jpg";
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
    Palette as DesignIcon,
    Cloud,
} from "lucide-react";

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
            "Node.js, Express.js,Next.js, MongoDB, Firebase, REST APIs, Authentication, System Design",
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
        description:
            "2+ Insutry level fullstack projects",
    },
];

export const toolsData = [
    { icon: FileCode2, title: "VS Code" },
    { icon: Cloud, title: "Firebase" },
    { icon: Database, title: "MongoDB" },
    { icon: DesignIcon, title: "Figma" },
    { icon: GitBranch, title: "Git" },
];
