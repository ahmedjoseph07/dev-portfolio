import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-14">
            <h4 className="text-center mb-2 text-lg animate-bounce">
                Introduction
            </h4>
            <h2 className="text-center text-4xl font-bold ">About Myself</h2>
            <div className="flex w-full flex-col  items-center just gap-20 my-20">

                <div className="relative p-1 rounded-3xl">
                    <div className="relative">
                        <div className="absolute -z-10 inset-0 rounded-full p-[5px]  bg-gradient-to-br from-black via-green-50 to-white animate-spin-slow"></div>
                        <div className="w-64 z-50 sm:w-56 rounded-full max-w-none p-1">
                            <Image
                                className="rounded-full cursor-pointer"
                                src={assets.user_image}
                                alt="user_image"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <p className="mb-10 max-w-2xl leading-7 text-md text-center text-gray-500" >
                        I’m{" "}
                        <span className="animate-pulse font-bold">
                            Joseph Ahmed
                        </span>
                        , a <span className="font-bold">Backend Developer</span>{" "}
                        currently living in{" "}
                        <span className="font-bold">
                            Chittagong, Bangladesh
                        </span>{" "}
                        for my studies. I specialize in building{" "}
                        <span className="font-bold">
                            scalable backend systems
                        </span>
                        , designing{" "}
                        <span className="font-bold">efficient databases</span>,
                        and creating{" "}
                        <span className="font-bold">secure APIs</span>, while
                        also being capable of delivering{" "}
                        <span className="font-bold">
                            modern, responsive frontend interfaces
                        </span>
                        . Passionate about{" "}
                        <span className="font-bold">clean architecture</span>{" "}
                        and <span className="font-bold">optimization</span>, I
                        strive to build{" "}
                        <span className="font-bold">
                            fast, reliable, and user‑friendly applications
                        </span>
                        .
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl  ">
                        {infoList.map(
                            ({ icon, title, description }, idx) => (
                                <li
                                    key={idx}
                                    className="border hover:bg-gray-500 border-gray-500 rounded-xl cursor-pointer px-4 py-6 hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300 ease-in-out">
                                    <div className="w-3 mt-3">{icon}</div>
                                    <h3 className="my-4 font-semibold text-darkHover text-xl">
                                        {title}
                                    </h3>
                                    <p className="text-sm">
                                        {description}
                                    </p>
                                </li>
                            )
                        )}
                    </ul>
                    <h4 className="my-4 text-xl font-semibold">Tools I Used</h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-6 max-w-2xl">
                        {toolsData.map(({ icon: Icon, title }, idx) => (
                            <li
                                key={idx}
                                className="border border-gray-500 rounded-xl cursor-pointer px-6 py-5 flex flex-col items-center justify-center gap-3 w-30 h-30 hover:bg-gray-500  hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.05] transition-all duration-500 ease-in-out">
                                <Icon className="w-8 h-8" />
                                <span className="font-medium">{title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default About;
