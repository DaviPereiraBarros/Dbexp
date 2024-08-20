'use client'

import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import Link from "next/link";
import FailModal from "../failModal/fail_modal";
import SucessModal from "../sucessModal/sucess_modal";
import Loading from "../loading/loading";

export default function Form() {
    const [isLoading, setLoading] = useState(false)
    const [isSucessModal, setSucessModal] = useState(false)
    const [isFailModal, setFailModal] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            site: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Campo Obrigatório"),
            email: Yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
            phone: Yup.string().matches(/^\d{11}$/, "Digite um telefone válido"),
            site: Yup.string(),
            message: Yup.string(),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmitForm(values),
    });

    const handleSubmitForm = (values: { name: any; email: any; phone: any; site: any; message: any; }) => {
        setLoading(true)

        const messageBody = `Olá, Dbexp! Um potencial cliente mandou seus dados, entre em contato.\n` +
            `Nome:${values.name}\n` +
            `Email: ${values.email}\n` +
            `Telefone: ${values.phone}\n` +
            `Site: ${values.site}\n` +
            `Mensagem: ${values.message}`;

        axios.post('/api/sendEmail', { messageBody: messageBody })
            .then(() => {
                formik.resetForm();
                setLoading(false)
                setSucessModal(true)
            })
            .catch(() => {
                setLoading(false)
                setFailModal(true)
            })
    }

    const closeModal = () => {
        setFailModal(false)
        setSucessModal(false)
    }

    return (
        <section id="contact" className="py-16 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900 relative overflow-hidden">
            {isSucessModal && <SucessModal closeModal={closeModal} />}
            {isFailModal && <FailModal closeModal={closeModal} />}
            {isLoading && <Loading />}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-400 opacity-30 animate-pulse"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row relative z-10 space-y-12 md:space-y-0 md:space-x-32">
                <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md space-y-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contato</h2>
                    <form id="formulario" onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-300 hover:border-green-400 text-lg"
                                    required
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-300 hover:border-green-400 text-lg"
                                    required
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaPhone className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-300 hover:border-green-400 text-lg"
                                    required
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="site" className="block text-sm font-medium text-gray-700 mb-2">Site</label>
                            <div className="relative rounded-md shadow-sm">
                                <input
                                    type="text"
                                    id="site"
                                    name="site"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-300 hover:border-green-400 text-lg"
                                    value={formik.values.site}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                            <div className="relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaComment className="text-gray-400" />
                                </div>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 transition duration-300 hover:border-green-400 text-lg"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition duration-300 transform hover:scale-105"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                    <div className="px-4 md:px-0 ml-2 mb-16 text-center md:text-left space-y-8" id="texts">
                        <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 md:mb-8">
                            <span>Evolua sua empresa com sistemas personalizados</span>
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl opacity-80 mt-4 md:mt-6">
                            Não perca tempo! Nós estamos prontos para proporcionar as melhores soluções do mercado para o seu negócio.
                        </p>
                        <p className="text-gray-700 text-lg md:text-xl opacity-80 mt-4 md:mt-6">
                            Envie-nos uma mensagem preenchendo o formulário ao lado ou no ícone do WhatsApp.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
