import React from "react";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full transition-transform duration-300 px-[8%] py-6 border-t border-gray-300 text-gray-600 animate-fadeIn">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-center md:text-left text-md font-semibold">
                    © {new Date().getFullYear()} Joseph Ahmed — Thanks for
                    visiting!
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500">
                    <a
                        href="mailto:ahmedjoseph11@gmail.com"
                        className="flex items-center gap-2 hover:text-gray-800 hover:scale-110 transition-transform duration-200">
                        <FaEnvelope size={18} />
                        <span>Email</span>
                    </a>
                    <a
                        href="https://github.com/ahmedjoseph07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gray-800 hover:scale-110 transition-transform duration-200">
                        <FaGithub size={18} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://wa.me/8801752025146"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-gray-800 hover:scale-110 transition-transform duration-200">
                        <FaWhatsapp size={18} />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
