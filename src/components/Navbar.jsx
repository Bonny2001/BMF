import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // modern icon set

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (item) => {
        setIsOpen(false); // close menu after navigation
        if (item === "Home") navigate("/");
        else if (item === "Members") navigate("/member");
        else if (item === "Services") navigate("/skill");
        else if (item === "About") navigate("/about");
        else if (item === "Contact") navigate("/contact");
    };

    return (
        <nav className="flex items-center justify-between p-3 bg-opacity-30 backdrop-blur-lg 
                        text-white text-xl fixed top-0 left-0 w-full z-50 anim1"
            style={{ animationDelay: "0.8s" }}
        >
            {/* Logo */}
            <div className="flex items-center pr-15 gap-2 cursor-pointer" onClick={() => navigate("/")}>
                <img
                    className="h-[3.5rem] hover:scale-110 transition-all duration-300"
                    src="bmf_logo.png"
                    alt="logo"
                />
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-8">
                {["Home", "Members", "About", "Contact"].map((item) => (
                    <li
                        key={item}
                        onClick={() => handleClick(item)}
                        className="relative cursor-pointer transition-all duration-300 hover:text-white 
                                   after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 
                                   after:h-[2px] after:bg-blue-100 after:transition-all after:duration-300 
                                   hover:after:w-full font-hero3 md:text-[17px] lg:text-[19px] xl:text-[21px]"
                    >
                        {item}
                    </li>
                ))}
            </ul>

            {/* Desktop Contact Button */}
            <div className="hidden md:flex justify-end ms-auto">
                <button className="inline-flex items-center justify-center p-[1px] mb-1 me-1 overflow-hidden 
                                   text-xs lg:text-sm font-medium text-gray-900 rounded-md group
                                   bg-gradient-to-br from-red-500 to-red-500 group-hover:from-purple-500 
                                   group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-2 
                                   focus:outline-none focus:ring-yellow-200 dark:focus:ring-purple-800">
                    <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-black 
                                     dark:bg-gray-900 rounded-sm text-white group-hover:bg-transparent">
                        <a href="https://www.facebook.com/bmf2k22" target="_blank" rel="noreferrer">
                            Contact Us
                        </a>
                    </span>
                </button>
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-black bg-opacity-95 backdrop-blur-lg 
                                flex flex-col items-center py-6 space-y-4 md:hidden transition-all duration-500 z-40">
                    {["Home", "Members", "About", "Contact"].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleClick(item)}
                            className="text-white text-lg font-hero3 hover:text-red-400 transition-all"
                        >
                            {item}
                        </button>
                    ))}

                    <button className="inline-flex items-center justify-center p-[1px] overflow-hidden text-sm font-medium 
                                       text-gray-900 rounded-md group bg-gradient-to-br from-red-500 to-red-500 
                                       hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-yellow-200">
                        <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-black 
                                         dark:bg-gray-900 rounded-sm text-white group-hover:bg-transparent">
                            <a href="https://www.facebook.com/bmf2k22" target="_blank" rel="noreferrer">
                                Contact Us
                            </a>
                        </span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

