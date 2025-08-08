import { assets } from "@/assets/assets";
import { Download, Github, Hand, UserRoundSearch } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center px-3 sm:px-4 gap-5 sm:gap-6">
            <motion.div
                className="relative"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
                <Image
                    src={assets.profile_img}
                    alt="profile_img"
                    className="rounded-full animate cursor-pointer w-24 xs:w-28 sm:w-36 md:w-40 border-6 border-gray-400 shadow-lg"
                />
                <span className="absolute -bottom-0 right-0 animate-ping bg-green-500 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-none"></span>
            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex animate-pulse flex-wrap items-center justify-center gap-2 text-lg xs:text-xl sm:text-2xl font-medium">
                <Hand className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
                Hello, I am
                <span className="font-extrabold">JOSEPH AHMED</span>
            </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug hover:scale-[1.01] transition duration-300 cursor-pointer">
                Backend Developer & Database Architect
                <br className="hidden sm:block" /> based in Chittagong
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-gray-500 max-w-md xs:max-w-lg sm:max-w-xl text-md xs:text-base">
                Passionate about crafting robust backend systems, designing
                efficient databases, and building scalable applications with
                clean architecture.
            </motion.p>

            <div className="text-base xs:text-lg sm:text-xl font-semibold text-gray-500">
                <Typewriter
                    words={[
                        "Designing RESTful APIs",
                        "Building Secure Backends",
                        "Optimizing Databases",
                        "Deploying Scalable Applications",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto justify-center">
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: .9 }}
                    href="https://github.com/ahmedjoseph07"
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-xl hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] duration-300 transition text-sm sm:text-base">
                    My Github <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    href="/resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-400  rounded-xl hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] duration-300 transition text-sm sm:text-base">
                    Resume <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
