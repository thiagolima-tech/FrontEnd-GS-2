import { useState } from "react";
import Input from "../components/Input"
import lightMode from '../assets/light_mode.png'

const Home = () =>{
    const [search, setSearch] = useState('')
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative gradient-dark w-full min-h-screen flex flex-col justify-center transition-all duration-200 items-center`}>
            {// esse h1 so ta desaparecendo prcisa de uma trnasição pra sumir para deixar o input com animação certinha
            }
            <img className="absolute top-15 right-15" src={lightMode} alt="lightMode" />

            <h1 className={`transform w-[765px] text-center text-white text-6xl md:text-8xl transition-all duration-200 ease-in-out ${isFocused ? 'opacity-0 -translate-y-4 scale-75' : 'opacity-100 translate-y-0'}`}>
                Veja o futuro dos <span className="font-medium" style={{color: 'var(--roxo)'}}>profissionais</span>
            </h1>

            <div className={`w-full flex justify-center transition-all duration-300 ease-out ${isFocused ? 'absolute top-15 left-1/2 -translate-x-1/2 md:w-[50%]' : 'relative'}`}>
                <div className="w-full">
                    <Input value={search} onChange={setSearch} onFocus={() => setIsFocused(true)} onBlur={() =>{if (!search) setIsFocused(false)}}/>
                    <p className={`mt-3 text-[16px] text-white transform transition-all duration-300 ease-out text-center `}>Mostrar todos os resultados</p>
                </div>
            </div>

        </div>
    )
}

export default Home