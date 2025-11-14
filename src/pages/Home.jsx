import Input from "../components/Input"

const Home = () =>{
    return (
        <div className="gradient-dark w-full min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-center text-white text-6xl md:text-8xl">Veja o futuro dos <strong className="text-[var(--roxo)]">profissionais</strong></h1>
            <Input/>
        </div>
    )
}

export default Home