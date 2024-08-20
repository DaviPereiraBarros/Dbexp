'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LogoPollux from '../../assets/logo_cliente/POLLUX-logo-branco_bg-transparente-2.png'
import LogoIventis from '../../assets/logo_cliente/Iventis.png'

const Clients = () => {
    const clients = [
        { name: 'Pollux', logo: LogoPollux },
        { name: 'Cliente 2', logo: LogoIventis }, 
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
        }, 3500); 

        return () => clearInterval(interval);
    }, [clients.length]);

    return (
        <div id='clients' className="py-16 bg-gradient-to-r from-black via-gray-800 to-gray-900">
            <h2 className="text-3xl font-bold text-center mb-6">Nossos Clientes</h2>
            <div className="flex justify-center">
                <div className="overflow-hidden w-1/2">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {clients.concat(clients[0]).map((client, index) => (
                            <div key={index} className="flex-shrink-0 w-full">
                                <Image src={client.logo} alt={client.name} className="h-16 w-auto mx-auto" width={420} height={420} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
