import { serviceData } from "@/assets/assets";
import React from "react";

const Services = () => {
    return (
        <div id="services" className="w-full px-8 py-10">
            <h4 className="text-center mb-2 text-lg animate-bounce">
                What I Do
            </h4>

            <h2 className="text-center text-4xl font-bold">
                Development Services
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-500">
                I provide end‑to‑end development services, from crafting modern,
                responsive frontends to building secure, scalable backends and
                well‑optimized databases.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 max-w-2xl mx-auto">
                {serviceData.map(({ icon, title, description }, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-500 rounded-xl cursor-pointer px-6 py-6 flex flex-col items-start hover:bg-gray-500 hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300 ease-in-out">
                        <div className="w-8 h-8">{icon}</div>
                        <h3 className="my-4 font-semibold text-darkHover text-lg">
                            {title}
                        </h3>
                        <p className="text-sm leading-6">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
