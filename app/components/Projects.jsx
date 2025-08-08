import { workData } from "@/assets/assets";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";

const Projects = () => {
    return (
        <div id="projects" className="w-full px-[12%] py-20 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg animate-bounce">
                My Works
            </h4>

            <h2 className="text-center text-4xl font-bold">Projects I Built</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-500">
                A collection of my featured projects showcasing skills in
                full‑stack development, from creating interactive user
                interfaces to building secure and scalable backend systems.
            </p>

            <div className="grid grid-cols-1 my-10 gap-6 max-w-2xl mx-auto">
                {workData.map(
                    (
                        {
                            title,
                            description,
                            bgImage,
                            clientCode,
                            serverCode,
                            liveLink,
                            type,
                        },
                        idx
                    ) => (
                        <div
                            key={idx}
                            style={{
                                backgroundImage: `url(${bgImage})`,
                            }}
                            className="aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden hover:scale-[1.02] transition-all duration-500 ease-in-out shadow-lg">
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="bg-white/90 mb-2 h-55 backdrop-blur-sm w-11/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 flex flex-col gap-3 shadow-lg group-hover:translate-y-[-5px] transition-all duration-500">
                                <div>
                                    <h2 className="text-md font-extrabold text-black">
                                        {title}
                                    </h2>
                                    <p className="font-semibold text-black">
                                        {type}
                                    </p>
                                    <p className="font-medium hidden md:block text-gray-600">
                                        {description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-2 mt-5 md:-mt-2">
                                    <a
                                        href={clientCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-xs md:text-sm px-3 py-1 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
                                        <FaGithub className="w-4 h-4" /> Client
                                        Code
                                    </a>
                                    <a
                                        href={serverCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-xs md:text-sm px-3 py-1 rounded-md bg-black text-white hover:bg-gray-800 transition-colors">
                                        <FaGithub className="w-4 h-4" /> Server
                                        Code
                                    </a>
                                    <a
                                        href={liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-xs md:text-sm px-3 py-1 rounded-md bg-white text-black border border-black hover:shadow-xl transition-colors">
                                        <VscPreview className="w-4 h-4" /> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Projects;
