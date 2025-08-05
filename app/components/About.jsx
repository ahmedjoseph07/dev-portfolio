import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text=lg animate-bounce">
                Introduction
            </h4>
            <h2 className="text-center text-4xl font-bold ">About Myself</h2>
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                    <Image
                        className="rounded-3xl cursor-pointer"
                        src={assets.user_image}
                        alt="user_image"/>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl leading-8">
                        I’m <span className="animate-pulse font-bold">Joseph Ahmed</span>, a Backend Developer currently living
                        in Chittagong, Bangladesh for my studies. I specialize
                        in building scalable backend systems, designing
                        efficient databases, and creating secure APIs, while
                        also being capable of delivering modern, responsive
                        frontend interfaces. Passionate about clean architecture
                        and optimization, I strive to build fast, reliable, and
                        user‑friendly applications.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl ">
                        {infoList.map(({icon,iconDark,title,description},idx)=>(
                            <li key={idx} className="border-[.5px] border-gray-500 rounded-xl cursor-pointer px-4 py-6 hover:bg-lightHover">
                                <div className="w-7 mt-3">{icon}</div>
                                <h3 className="my-4 font-semibold text-darkHover text-xl">{title}</h3>
                                <p className="text-test bg-test text-sm">{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
