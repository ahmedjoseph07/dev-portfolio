import { assets } from "@/assets/assets";
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
                        className="rounded-3xl"
                        src={assets.user_image}
                        alt="user_image"></Image>
                </div>
                <div className="flex-1">
                    <p>
                        I’m Joseph Ahmed, a Backend Developer currently living
                        in Chittagong, Bangladesh for my studies. I specialize
                        in building scalable backend systems, designing
                        efficient databases, and creating secure APIs, while
                        also being capable of delivering modern, responsive
                        frontend interfaces. Passionate about clean architecture
                        and optimization, I strive to build fast, reliable, and
                        user‑friendly applications.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
