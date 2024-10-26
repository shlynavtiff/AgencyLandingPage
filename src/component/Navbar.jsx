import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [navColor, setNavColor] = useState(false);

    const handleNav = () => {
        setNavOpen(!navOpen);
    };

    const changeNavBackground = () => {
        if (window.scrollY >= 100) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavBackground);
        return () => {
            window.removeEventListener('scroll', changeNavBackground);
        };
    }, []);

    return (

        <nav className={`fixed w-full z-50 duration-300 'bg-transparent'}`}>
            <div className="max-w-[1300px] mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <h1 className="text-white font-bold text-2xl">sunnyside</h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 text-white">
                    <li>
                        <a href="#home" className="hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-gray-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-300">Contact</a>
                    </li>
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden z-10" onClick={handleNav}>
                    {!navOpen ? <FaBars size={25} className="text-white" /> : <FaTimes size={25} className="text-white" />}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-0 left-0 w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center space-y-6 transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                    <a href="#home" onClick={handleNav} className="text-2xl hover:text-gray-300">
                        Home
                    </a>
                    <a href="#about" onClick={handleNav} className="text-2xl hover:text-gray-300">
                        About
                    </a>
                    <a href="#services" onClick={handleNav} className="text-2xl hover:text-gray-300">
                        Services
                    </a>
                    <a href="#contact" onClick={handleNav} className="text-2xl hover:text-gray-300">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar