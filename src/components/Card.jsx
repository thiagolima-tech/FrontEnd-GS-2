const Card = ({img, name, job, skills}) => {
    return (
        <div className="gradient-card-dark shadow-card flex flex-col w-[80%] rounded-2xl p-5 text-white text-2xl justify-center items-center">
            <img src={img} alt="imagem profissional" className="rounded-full w-[178px] h-[178px]"/>
            <h2 className="text-4xl mt-3">{name}</h2>
            <h3>{job}</h3>
            <h3>{skills}</h3>
            <div className="grid grid-cols-2 mt-3 gap-6"> 
                <button className="text-[18px] text-[#9974FF] border border-[#9974FF] rounded-full p-2 px-3 text-center">Mensagem</button>
                <button className="text-[18px] text-white bg-[#7C4DFF] rounded-full p-2 px-3 text-center">Recomendar</button>
            </div>
        </div>
    )
}

export default Card