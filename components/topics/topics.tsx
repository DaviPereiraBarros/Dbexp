import { FaCheckCircle, FaUserFriends, FaWrench, FaLightbulb } from 'react-icons/fa';

export default function Topics() {
    const topics = [
        {
            title: 'Serviço de Qualidade',
            description: 'Oferecemos os melhores serviços do mercado, garantindo a satisfação dos nossos clientes.',
            icon: FaCheckCircle,
        },
        {
            title: 'Equipe Especializada',
            description: 'Nossa equipe é composta por profissionais altamente qualificados.',
            icon: FaUserFriends,
        },
        {
            title: 'Atendimento Personalizado',
            description: 'Cada cliente é único e nosso atendimento reflete isso, com soluções personalizadas.',
            icon: FaWrench,
        },
        {
            title: 'Inovação Constante',
            description: 'Estamos sempre buscando novas tecnologias e métodos para melhorar nossos serviços.',
            icon: FaLightbulb,
        },
    ];

    return (
        <div id='topics' className="py-16 bg-gradient-to-r from-black via-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-white mb-12">O QUE OFERECEMOS PARA SUA EMPRESA</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl text-white"
                        >
                            <div className="flex justify-center mb-4">
                                {topic.icon && <topic.icon className="text-green-500 text-4xl" />}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
                            <p className="text-gray-300">{topic.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
