import { useState } from "react"
import emailjs from '@emailjs/browser'

const FormMessage = ({nameCard}) => {
    const [nameUser, setNameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [messageUser, setMessageUser] = useState('')

    function sendEmail(e) {
        e.preventDefault()

        if (!nameUser || !emailUser || !messageUser){
            alert("Preencha todos os campos")
            return
        }

        const templateParams = {
            name: nameUser,
            message: messageUser,
            email: emailUser
        }

        emailjs
            .send(
                'service_jrx9ocp',
                'template_5w7pzol',
                templateParams,
                'tWSIINXoK-pvLtB50'
            )
            .then(() => {
                alert('Email enviado!')
                setNameUser('')
                setEmailUser('')
                setMessageUser('')
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h2>Mande sua mensagem para {nameCard} </h2>
            <form onSubmit={sendEmail}>
                
                <input 
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                    onChange={(e) => setNameUser(e.target.value)}
                    value={nameUser}
                />

                <input 
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmailUser(e.target.value)}
                    value={emailUser}
                />

                <textarea
                    id="message"
                    placeholder="Digite sua mensagem"
                    onChange={(e) => setMessageUser(e.target.value)}
                    value={messageUser}
                />

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default FormMessage
