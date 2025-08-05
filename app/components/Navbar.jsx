import { assets } from "@/assets/assets";
import React, { useRef } from "react";
import Logo from "./Logo";
import { Menu, Moon, UserRoundSearch, X } from "lucide-react";

const Navbar = () => {

    const sideMenuRef = useRef();
    // console.log(sideMenuRef.current)
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = `translateX(-16rem)`;
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = `translateX(16rem)`;
    }

    return (
        <>
            <nav className="w-full fixed px-5 lg:px-8 xl:px-10 py-4 flex items-center justify-between z-50">
                <a href="#top">
                    <Logo className="w-28 h-28 cursor-pointer mr-14" />
                </a>
                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50">
                    <li>
                        <a className="font-Ovo" href="#top">
                            Home
                        </a>
                        <p></p>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#projects">
                            My Projects
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo" href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>

                <div className="flex items-center gap-4">
                    <button>
                        <Moon className="w-6" />
                    </button>
                    <a
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">
                        Contact
                        <UserRoundSearch />
                    </a>

                    <button className="block md:hidden ml-3" onClick={openMenu}>
                        <Menu className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}

                <ul ref={sideMenuRef} className="flex flex-col md:hidden gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen -right-64 bg-rose-50 transition duration-500">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <X className="w-5 cursor-pointer"/>
                    </div>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#top">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#projects">
                            My Projects
                        </a>
                    </li>
                    <li>
                        <a className="font-Ovo" onClick={closeMenu} href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
