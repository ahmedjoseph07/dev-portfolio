import React from "react";

const Footer = () => {
    return (
        <footer className="w-full hover:scale-[1.02] cursor-pointer transition-transform duration-300 px-[12%] py-6 border-t border-gray-300 text-center text-gray-600 animate-fadeIn">
            <p className="text-md font-bold ">
                © {new Date().getFullYear()} Joseph Ahmed . Thanks for paying a visit.
            </p>
        </footer>
    );
};

export default Footer;
