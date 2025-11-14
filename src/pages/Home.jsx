import { useState } from "react";
import Input from "../components/Input"

const Home = () =>{
    const [search, setSearch] = useState('')
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`gradient-dark w-full min-h-screen flex flex-col justify-center items-center transition-all duration-300 ${isFocused ? 'items-start' : 'items-center'}`}>
            {// esse h1 so ta desaparecendo prcisa de uma trnasição pra sumir para deixar o input com animação certinha
            }
            <h1 className={`text-center text-white text-6xl md:text-8xl ${isFocused ? 'hidden' : null}`}>Veja o futuro dos <strong className="text-[var(--roxo)]">profissionais</strong></h1>
            <Input value={search} onChange={setSearch} onFocus={() => setIsFocused(true)} onBlur={() =>{if (!search) setIsFocused(false)}}/>
        </div>
    )
}

export default Home