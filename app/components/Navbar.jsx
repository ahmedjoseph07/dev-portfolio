import { assets } from "@/assets/assets";
import React, { useRef } from "react";
import { Menu, Moon, UserRoundSearch, X } from "lucide-react";

const Navbar = () => {
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = `translateX(-16rem)`;
    };
    const closeMenu = () => {
        sideMenuRef.current.style.transform = `translateX(16rem)`;
    };

    return (
        <>
            <nav className="w-full backdrop-blur-md fixed px-5 lg:px-8 xl:px-10 py-4 flex items-center justify-end md:justify-between  z-50 md:border-b md:border-dashed md:border-gray-500">
                
                <ul className="hidden sm:flex justify-center items-center gap-5 lg:gap-8  px-6 sm:px-8 lg:px-12 py-2.5 ">
                    <li>
                        <a
                            className="font-Ovo hover:text-gray-500"
                            href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Ovo hover:text-gray-500"
                            href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Ovo hover:text-gray-500"
                            href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Ovo hover:text-gray-500"
                            href="#projects">
                            My Projects
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button>
                        <Moon className="w-6" />
                    </button>
                    <a
                        href="#contact"
                        className="hidden md:flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm sm:text-base">
                        Contact
                        <UserRoundSearch />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Menu className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}

                <ul
                    ref={sideMenuRef}
                    className="flex flex-col md:hidden gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen -right-64 bg-gray-100 transition duration-500">
                    <div className="absolute right-6 top-6 " onClick={closeMenu}>
                        <X className="w-5 cursor-pointer" />
                    </div>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Ovo"
                            onClick={closeMenu}
                            href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Ovo"
                            onClick={closeMenu}
                            href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Ovo"
                            onClick={closeMenu}
                            href="#projects">
                            My Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="font-Ovo"
                            onClick={closeMenu}
                            href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
