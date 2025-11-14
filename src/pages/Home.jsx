import { useState } from "react";
import Input from "../components/Input"

const Home = () =>{
    const [search, setSearch] = useState('')
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="gradient-dark w-full min-h-screen flex flex-col justify-center items-center">
            {!isFocused && (
            <h1 className="text-center text-white text-6xl md:text-8xl">Veja o futuro dos <strong className="text-[var(--roxo)]">profissionais</strong></h1>
            )}
            <Input value={search} onChange={setSearch} onFocus={() => setIsFocused(true)} onBlur={() =>{if (!search) setIsFocused(false)}}/>
        </div>
    )
}

export default Home