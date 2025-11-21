import { useState } from "react"
import emailjs from '@emailjs/browser'

const FormMessage = (nameCard) => {
    const [nameUser, setNameUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [messageUser, setMessageUser] = useState('')

    function sendEmail(e){
        e.preventDefault()
        if (nameUser === "" || emailUser === "" || messageUser === ""){
            alert("Preencha todos os campos")
            return
        }
        
        const templateParams = {
            name: nameUser,
            message: messageUser,
            email: emailUser
        }

        emailjs.send('service_jrx9ocp', 'template_5w7pzol', templateParams, tWSIINXoK-pvLtB50)
        .then((response) => {
            alert('Email Enviado') 
            setEmailUser('')
            setMessageUser('')
            setNameUser('')
        },(err) => {console.log(err)})
    }

    return (
        <div>
            <h2>Mande sua mensagem para {nameCard} </h2>
            <form onSubmit={sendEmail}>
                <label htmlFor="name"></label>
                <input type="text" id="name" placeholder="Digite seu nome" onChange={setNameUser} value={nameUser}/> 

                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Digite seu email" onChange={setEmailUser} value={emailUser}/>

                <label htmlFor="message"></label>
                <textarea id="message" placeholder="Digite sua mensagem" onChange={setMessageUser} value={messageUser}/>
            </form>
        </div>
    )
}

export default FormMessage