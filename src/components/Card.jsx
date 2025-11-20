import iconeEmailDark from '../assets/iconeEmailDarkMode.png';
import iconeEmailLight from '../assets/iconeEmailLightMode.png';
import iconeRecomendar from '../assets/iconeRecomendar.png';
import placeholderImg from '../assets/ProConnectLogo.png';

const Card = ({ data = {}, lightModeOn = false }) => {
    // support Portuguese JSON fields (nome, foto, cargo, hardskills, softskills, resumo, localizacao)
    const personaImg = data.foto || data.img || '';
    const personaName = data.nome || data.name || '';
    const personaJob = data.cargo || data.job || '';
    const personaResumo = data.resumo || data.summary || '';
    const personaLocation = data.localizacao || data.location || '';
    const personaHardskills = data.hardskills || data.skills || [];
    const personaSoftskills = data.softskills || [];
    const idiomas = data.idiomas || [];

    const resolveImg = (src) => {
        if (!src) return placeholderImg;
        if (String(src).startsWith('/mnt')) return placeholderImg;
        return src;
    }

    return (
        <div className={`gradient-card-dark shadow-card flex flex-col w-[88%] md:w-[95%] rounded-2xl p-5 py-10 my-8 ${lightModeOn ? 'text-[#222]' : 'text-white'}`}>
            <div className="flex flex-col items-center">
                <img src={resolveImg(personaImg)} alt={personaName ? `${personaName} - foto` : 'imagem profissional'} className="rounded-full w-[178px] h-[178px] object-cover" />
                {personaName && <h2 className="text-2xl md:text-3xl mt-3 font-semibold">{personaName}</h2>}
                {personaJob && <h3 className={`text-xl md:text-xl ${lightModeOn ? 'text-[#444]' : 'text-[#cfcfe8]'}`}>{personaJob}</h3>}
                {personaHardskills && (<p className={`text-xl md:text-xl ${lightModeOn ? "text-[#666]" : "text-[#bfbfdc]"}`}> {personaHardskills.map((i, idx) => (<span key={idx} className="mr-1">{i}</span>))}</p>)}

                <div className="grid grid-cols-2 mt-8 gap-4 w-full"> 
                    <button className={`text-[14px] md:text-[16px] border rounded-full p-2 px-3 flex items-center gap-2 justify-center ${lightModeOn ? 'text-[#0077cc] border-[#0077cc]' : 'text-[#9974FF] border-[#9974FF]'}`}>
                        <img src={lightModeOn ? iconeEmailLight : iconeEmailDark} alt="email" className="w-5 h-5" />
                        Mensagem
                    </button>
                    <button className={`text-[14px] md:text-[16px] rounded-full p-2 px-3 flex items-center gap-2 justify-center text-white bg-[#7C4DFF]`}>
                        <img src={iconeRecomendar} alt="recomendar" className="w-5 h-5" />
                        Recomendar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card