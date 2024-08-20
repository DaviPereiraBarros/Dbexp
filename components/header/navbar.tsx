'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Logo from "../../assets/Logo DBexp.svg";
import Link from "next/link";
import { AiOutlineMenu } from 'react-icons/ai';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    let dropdownTimeout: NodeJS.Timeout;

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeout);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeout = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300);
    };

    const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute('href')?.substring(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`bg-black text-white shadow-lg ${animate ? "animate-fade-in-down" : "opacity-0"} relative z-50`}>
            <nav className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="flex items-center">
                    <Image src={Logo} alt='Logo Dbexp' width={180} height={180} />
                </Link>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="/" className="text-xl hover:text-green-400 transition duration-300" onClick={smoothScroll}>
                        Início
                    </Link>
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link href="#services" className="text-xl hover:text-green-400 transition duration-300 cursor-pointer" onClick={smoothScroll}>
                            Serviços
                        </Link>
                        {/*{isDropdownOpen && (
                            <div
                                className="absolute top-full left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg z-50"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <ul>
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-gray-700" href="/protheusPage">
                                            ERP Protheus
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-gray-700" href="/service2">
                                            Web
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-2 hover:bg-gray-700" href="/service3">
                                            Sistemas
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}*/}
                    </div>
                    <Link className="text-xl hover:text-green-400 transition duration-300" href="#about" onClick={smoothScroll}>
                        Sobre
                    </Link>
                    <Link className="text-xl hover:text-green-400 transition duration-300" href="#contact" onClick={smoothScroll}>
                        Contato
                    </Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <AiOutlineMenu className="w-6 h-6" />
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-black p-4 rounded shadow-lg">
                    <div className="flex flex-col items-center space-y-4">
                        <Link href="/" className="text-xl hover:text-green-400 transition duration-300" onClick={toggleMenu}>
                            Início
                        </Link>
                        <Link href="#services" className="text-xl hover:text-green-400 transition duration-300" onClick={toggleMenu}>
                            Serviços
                        </Link>
                        <Link href="#about" className="text-xl hover:text-green-400 transition duration-300" onClick={toggleMenu}>
                            Sobre
                        </Link>
                        <Link href="#contact" className="text-xl hover:text-green-400 transition duration-300" onClick={toggleMenu}>
                            Contato
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
