"use client"

import { useEffect, useState } from "react";

import BackgroundImage from "../../assets/BackGround2.jpg";

export default function Welcome() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 80);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            id='welcome' className={`relative flex flex-col items-center justify-center min-h-screen text-white transition-opacity duration-700 ${animate ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-center p-6 transform transition-transform duration-700">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Consultoria TI</h1>
                <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto drop-shadow-md">
                    Nosso objetivo é fornecer soluções tecnológicas personalizadas que atendam às necessidades específicas do seu negócio e alavanque seus resultados.
                </p>
                <a href="#about"
                    className="bg-green-500 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:bg-green-600 hover:scale-105"
                >
                    Fale Conosco
                </a>
            </div>
        </div>
    );
}