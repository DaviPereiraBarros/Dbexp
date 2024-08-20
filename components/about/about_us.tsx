import Image from "next/image"
import Logo from "../../assets/Logo DBexp.svg"

export default function AboutUs() {
    return (
        <div id='about' className="py-16 bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <Image src={Logo} alt="Logo da Empresa" width={350} height={300} className="transform transition duration-500 hover:scale-110" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold mb-6 text-green-400">SOBRE NÓS</h2>
                    {/*<p className="mb-6 text-lg leading-relaxed ">
                        Somos uma empresa dedicada a oferecer as melhores soluções para nossos clientes. Nossa missão é entregar produtos de alta qualidade que atendam às necessidades específicas do seu negócio. Estamos sempre em busca de inovação e excelência.
                    </p>*/}
                    <p className="mb-6 text-lg leading-relaxed ">
                    A Dbexp é uma empresa de consultoria de TI especializada em personalizações no ERP Protheus, desenvolvimento de sistemas e soluções integradas para o seu negócio. Com um compromisso firme com o planejamento estratégico, o alinhamento às regras da sua empresa e a documentação detalhada dos sistemas, oferecemos soluções inovadoras, modernas e criativas que impulsionam o crescimento e a eficiência da sua organização.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        Fundada em 2024, nossa visão é que cada linha de código implementada carregue nosso DNA: criatividade, inovação e comprometimento. É assim que facilitamos negócios, transformamos empresas e impactamos o dia a dia.
                    </p>
                </div>
            </div>
        </div>
    )
}