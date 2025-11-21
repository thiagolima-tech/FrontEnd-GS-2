import { useState } from "react"
import emailjs from "@emailjs/browser"

const FormMessage = ({ nameCard, onClose }) => {
    const [nameUser, setNameUser] = useState("")
    const [emailUser, setEmailUser] = useState("")
    const [messageUser, setMessageUser] = useState("")
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        if (!nameUser || !emailUser || !messageUser) {
            alert("Preencha todos os campos")
            return
        }

        const templateParams = {
            name: nameUser,
            message: messageUser,
            email: emailUser,
        }

        emailjs
            .send(
                "service_jrx9ocp",
                "template_5w7pzol",
                templateParams,
                "tWSIINXoK-pvLtB50"
            )
            .then(() => {
                setSuccess(true)
                setNameUser("")
                setEmailUser("")
                setMessageUser("")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-[#0E0E21] w-full max-w-md p-6 pt-16 rounded-3xl border border-white/10 shadow-lg relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 text-xl md:text-2xl px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                >←</button>

                <h2 className="text-center text-white mb-6 font-semibold text-lg">
                    ENVIE UMA MENSAGEM PARA {nameCard.toUpperCase()}
                </h2>

                <form className="flex flex-col gap-4" onSubmit={sendEmail}>
                    <input
                        type="text"
                        placeholder="Nome *"
                        className="bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white"
                        value={nameUser}
                        onChange={(e) => setNameUser(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Email *"
                        className="bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white"
                        value={emailUser}
                        onChange={(e) => setEmailUser(e.target.value)}
                    />

                    <textarea
                        placeholder="Mensagem *"
                        className="bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white h-32"
                        value={messageUser}
                        onChange={(e) => setMessageUser(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#7C4DFF] to-[#B39DFF] text-white py-3 rounded-xl font-semibold"
                    >
                        Enviar
                    </button>
                </form>
            </div>

            {/* MODAL DE SUCESSO */}
            {success && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-white w-72 p-6 rounded-3xl shadow-xl text-center">

                        <div className="text-4xl mb-3">✔️</div>

                        <p className="text-black text-lg font-medium mb-4">
                            Mensagem enviada com sucesso!
                        </p>

                        <button
                            onClick={() => {
                                setSuccess(false)
                                onClose()
                            }}
                            className="bg-[#7C4DFF] text-white w-full py-2 rounded-xl"
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormMessage
