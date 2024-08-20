'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function IconWpp() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div
            className="fixed bottom-4 right-4 flex items-center z-50"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
        >
            {showPopup && (
                <div className="mr-4 bg-green-500 text-white p-2 rounded-lg shadow-lg transition-opacity duration-300">
                    Fale conosco pelo WhatsApp!
                </div>
            )}
            <Link
                href="https://api.whatsapp.com/send?phone=5521981301066&text=Olá, fui encaminhado pelo site. Gostaria de saber mais sobre seus serviços!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                aria-label="Contato via WhatsApp"
            >
                <FaWhatsapp size={40} />
            </Link>
        </div>
    );
};
