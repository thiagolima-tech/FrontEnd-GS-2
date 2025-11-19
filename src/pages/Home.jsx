import { useState } from "react";
import Input from "../components/Input";
import lightMode from '../assets/light_mode.png';
import ProConnectTexto from '../assets/ProConnectTexto.png';
import ProConnectLogo from '../assets/ProConnectLogo.png';
import SearchWait from "../components/SearchWait";
import Card from "../components/Card";
import iconeLogo from "../assets/IconeProConnect.png";

const Home = () => {
    const [search, setSearch] = useState('')
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative gradient-dark w-full min-h-screen flex flex-col justify-center transition-all duration-200 items-center`}>

            <img onClick={()=>setIsFocused(false)} className={`z-20 absolute top-5 md:left-25 lg:left-40 md:top-15 ${isFocused ? 'block translate-y-0' : 'hidden -translate-y-4 scale-75'}`} src={ProConnectTexto} alt="Logotipo Pro Connect" />
            <img className="absolute top-8 right-8 md:top-15 md:right-15" src={lightMode} alt="lightMode" />

            <h1 className={`transform leading-tight w-[311px] md:w-[765px] text-center text-white text-[40px] md:text-8xl transition-all duration-200 ease-in-out ${isFocused ? 'hidden -translate-y-4 scale-75' : 'block translate-y-0'}`}>
                Veja o futuro dos <span className="font-medium" style={{ color: 'var(--roxo)' }}>profissionais</span>
            </h1>

            <div className={`w-full flex md:pb-14 justify-center transition-all duration-300 ease-out ${isFocused ? 'absolute top-15 md:top-4 left-1/2 -translate-x-1/2' : 'relative'}`}>
                <div className="w-full">
                    <Input value={search} onChange={setSearch} onFocus={() => setIsFocused(true)} />
                    <p className={`underline underline-offset-[3px] md:mt-3 text-[16px] text-white transform transition-all duration-300 ease-out text-center `}>Mostrar todos os resultados</p>
                </div>
            </div>
            <img className={`absolute bottom-6 md:top-[-60px] mx-auto w-[286px] ${isFocused ? 'hidden -translate-y-4 scale-75' : 'block translate-y-0'}`} src={ProConnectLogo} alt="Logotipo Pro Connect"/>

            {isFocused && <SearchWait /> }
            {isFocused && <img className="absolute w-70 md:bottom-0 md:right-8 lg:right-15 mx-auto bottom-0 opacity-35 md:opacity-100" src={iconeLogo} alt="Icone Pro Connect" />}        

            {isFocused && <SearchWait />}

        </div>
    )
}

export default Home