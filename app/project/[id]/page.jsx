import { workData } from "@/assets/assets";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectDetails({ params }) {
    const { id } = await params;
    const project = workData[id];

    if (!project) return notFound();

    return (
        <div className="px-[8%] py-20">

            <h1 className="text-4xl font-bold my-6">{project.title}</h1>

            <Image
                src={project.bgImage}
                alt={project.title}
                width={400}
                height={400}
                className=" rounded-lg shadow-lg mb-6"
            />

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
                <ul className="list-disc pl-6 text-gray-500">
                    {project.techStack?.map((tech, i) => (
                        <li key={i}>{tech}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-gray-500">{project.description}</p>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Links</h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 border py-2 rounded  text-black bg-white hover:bg-gray-500 transition-colors">
                        <VscPreview /> Live Demo
                    </a>
                    <a
                        href={project.clientCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded bg-black text-white hover:bg-gray-500 transition-colors">
                        <FaGithub /> Client Code
                    </a>
                    <a
                        href={project.serverCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded bg-black text-white hover:bg-gray-500 transition-colors">
                        <FaGithub /> Server Code
                    </a>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-2">
                    Challenges Faced
                </h2>
                <ul className="list-disc pl-6 text-gray-500">
                    {project.challenges?.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                    ))}
                </ul>
            </div>

            <Link
                href="/#projects"
                className="inline-block rounded-2xl mt-10 border p-4 hover:scale-105 transition-all duration-300">
                ← Back to Projects
            </Link>
        </div>
    );
}
