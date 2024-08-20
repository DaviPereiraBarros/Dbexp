import { FiCheckCircle } from "react-icons/fi"
import Button from "../button/button"

interface ModalProps {
    closeModal: () => void
}


export default function SucessModal({ closeModal }: ModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="absolute inset-0 bg-slate-200 opacity-80"></div>
            <div className="bg-white w-full max-w-[90%] sm:max-w-[400px] flex flex-col justify-center items-center relative text-center py-8 px-4 md:px-8 rounded-2xl shadow-md">
                <div className="text-5xl md:text-7xl text-green-500">
                    <FiCheckCircle />
                </div>
                <p className="text-xl md:text-3xl mt-6 text-gray-400">Email enviado com sucesso!</p>
                <div className="w-full mt-8 md:mt-12 max-w-[304px]">
                    <Button title={"Fechar"} kind={""} type={"button"} />
                </div>
            </div>
        </div>
    )
}