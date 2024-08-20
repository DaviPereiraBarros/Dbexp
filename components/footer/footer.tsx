'use client'

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Logo from "../../assets/Logo DBexp.svg";

export default function Footer() {
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
        <footer id='footer' className="bg-gray-900 text-white py-8 md:py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-gray-900 opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <Image src={Logo} className="text-2xl font-bold text-green-500" alt="Logo Rodape" width={150} height={150} />
                        <p className="mt-2 text-gray-400 text-sm md:text-base">© {new Date().getFullYear()} Todos os direitos reservados.</p>
                    </div>

                    <nav className="mb-6 md:mb-0">
                        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
                            <li>
                                <Link onClick={smoothScroll} href="#welcome" className="text-gray-400 hover:text-green-500 transition duration-300 text-sm md:text-base">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link onClick={smoothScroll} href="#topics" className="text-gray-400 hover:text-green-500 transition duration-300 text-sm md:text-base">
                                    Tópicos
                                </Link>
                            </li>
                            <li>
                                <Link onClick={smoothScroll} href="#service" className="text-gray-400 hover:text-green-500 transition duration-300 text-sm md:text-base">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link onClick={smoothScroll} href="#about" className="text-gray-400 hover:text-green-500 transition duration-300 text-sm md:text-base">
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link onClick={smoothScroll} href="#contact" className="text-gray-400 hover:text-green-500 transition duration-300 text-sm md:text-base">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-0">
                        <a
                            href="https://api.whatsapp.com/send?phone=5521981301066&text=Olá, fui encaminhado pelo site. Gostaria de saber mais sobre seus serviços!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-500 transition duration-300 rounded-full bg-gray-700 p-2 flex items-center justify-center transform hover:scale-110"
                        >
                            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-500 transition duration-300 rounded-full bg-gray-700 p-2 flex items-center justify-center transform hover:scale-110"
                        >
                            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-500 transition duration-300 rounded-full bg-gray-700 p-2 flex items-center justify-center transform hover:scale-110"
                        >
                            <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
