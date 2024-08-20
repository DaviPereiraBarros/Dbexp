import { FaTools, FaChartLine, FaDesktop, FaHeadset } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            title: 'Soluções Integradas',
            description: 'Integramos e otimizamos os sistemas da sua empresa, criando um ecossistema tecnológico eficiente.',
            icon: <FaTools className="text-green-500 text-4xl" />,
        },
        {
            title: 'Customizações ERP Protheus',
            description: 'Customizamos o seu sistema de acordo com seu negócio.',
            icon: <FaChartLine className="text-green-500 text-4xl" />,
        },
        {
            title: 'Desenvolvimento Sistemas',
            description: 'Desenvolvemos sistemas gerais para atender suas necessidades.',
            icon: <FaDesktop className="text-green-500 text-4xl" />,
        },
        {
            title: 'Suporte Técnico',
            description: 'Oferecemos suporte técnico para garantir que tudo funcione perfeitamente.',
            icon: <FaHeadset className="text-green-500 text-4xl" />,
        },
    ];
    return (
        <div id='services' className="py-16 bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold mb-12 text-green-400">NOSSOS SERVIÇOS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl shadow-lg bg-gray-800 hover:bg-gray-700 transition duration-500 transform hover:scale-105 hover:shadow-2xl border border-gray-600 hover:border-green-400"
                        >
                            <div className="flex justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-green-400">{service.title}</h3>
                            <p className="text-lg text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}