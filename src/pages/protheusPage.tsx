import 'tailwindcss/tailwind.css';
import Image from 'next/image';

import BackGroundProtheus from '../../assets/standard-quality-control-collage-concept (1).jpg';
import NavBar from '../../components/header/navbar';
import Footer from '../../components/footer/footer';
import Form from '../../components/forms/form';

export default function ProtheusPage() {
    return (
        <div>
            <NavBar />
            <section className="relative h-80">
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <Image
                        src={BackGroundProtheus}
                        alt='fundo protheus'
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center text-green-500">BENEFÍCIOS ERP PROTHEUS</h2>
                    <p className="mb-4">
                        O ERP Protheus oferece uma série de benefícios significativos para as empresas.
                        Com a automação de processos empresariais, a solução ajuda a otimizar tarefas repetitivas e manuais,
                        permitindo que os colaboradores foquem em atividades estratégicas. A ferramenta melhora a tomada de decisões
                        ao fornecer dados precisos e atualizados em tempo real, possibilitando uma análise mais assertiva do negócio.
                    </p>
                    <p className="mb-4">
                        A integração de todos os departamentos em uma única plataforma facilita a comunicação e o fluxo de informações
                        entre as áreas, resultando em uma operação mais coesa e eficiente. Além disso, o ERP Protheus contribui para a
                        redução de custos operacionais, eliminando redundâncias e aumentando a produtividade.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center text-green-500">FUNCIONALIDADES ERP PROTHEUS</h2>
                    <p className="mb-8 text-center text-gray-300">
                        Explore as funcionalidades que tornam o ERP Protheus uma ferramenta poderosa para a gestão empresarial.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Gestão Financeira</h3>
                            <p className="text-gray-300">Controle total sobre contas a pagar e receber, fluxo de caixa, e conciliação bancária.</p>
                        </div>
                        <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Gestão de Estoque</h3>
                            <p className="text-gray-300">Administração eficiente do inventário, controle de entradas e saídas, e rastreamento de produtos.</p>
                        </div>
                        <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Gestão de Compras</h3>
                            <p className="text-gray-300">Automatização do processo de compras, desde a requisição até a chegada do produto.</p>
                        </div>
                        <div className="bg-gray-900 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Gestão de Vendas</h3>
                            <p className="text-gray-300">Facilitação do processo de vendas com controle de pedidos, faturamento, e entrega.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Form />
            <Footer />
        </div>
    )
}
