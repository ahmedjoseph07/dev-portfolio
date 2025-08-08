import { serviceData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-14">
            <motion.h4
                className="text-center mb-2 text-lg animate-bounce"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                What I Do
            </motion.h4>

            <motion.h2
                className="text-center text-4xl font-bold"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}>
                Development Services
            </motion.h2>

            <motion.p
                className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}>
                I provide end‑to‑end development services, from crafting modern,
                responsive frontends to building secure, scalable backends and
                well‑optimized databases.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 max-w-2xl mx-auto">
                {serviceData.map(({ icon, title, description }, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: idx * 0.15,
                            ease: "easeOut",
                        }}
                        className="border border-gray-500 rounded-xl cursor-pointer px-6 py-6 flex flex-col items-start hover:bg-gray-500 hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <div className="w-8 h-8">{icon}</div>
                        <h3 className="my-4 font-semibold text-darkHover text-lg">
                            {title}
                        </h3>
                        <p className="text-sm leading-6">{description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
