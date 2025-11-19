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
        <div className={`gradient-card-dark shadow-card flex flex-col w-full md:w-[320px] rounded-2xl p-5 ${lightModeOn ? 'text-[#222]' : 'text-white'}`}>
            <div className="flex flex-col items-center">
                <img src={resolveImg(personaImg)} alt={personaName ? `${personaName} - foto` : 'imagem profissional'} className="rounded-full w-[178px] h-[178px] object-cover" />
                {personaName && <h2 className="text-2xl md:text-3xl mt-3 font-semibold">{personaName}</h2>}
                {personaJob && <h3 className={`text-sm md:text-base ${lightModeOn ? 'text-[#444]' : 'text-[#cfcfe8]'}`}>{personaJob}</h3>}
                {personaLocation && <p className={`text-xs md:text-sm ${lightModeOn ? 'text-[#666]' : 'text-[#bfbfdc]'}`}>{personaLocation}</p>}

                {personaResumo && <p className={`mt-2 text-sm text-center ${lightModeOn ? 'text-[#333]' : 'text-[#ddd]'}`}>{personaResumo}</p>}

                {(personaHardskills && personaHardskills.length > 0) && (
                    <div className="mt-3 flex flex-wrap gap-2 justify-center">
                        {personaHardskills.map((s, i) => (
                            <span key={i} className={`text-xs md:text-sm ${lightModeOn ? 'bg-black/5 text-[#222]' : 'bg-white/10 text-white'} px-3 py-1 rounded-full`}>{s}</span>
                        ))}
                    </div>
                )}

                {(personaSoftskills && personaSoftskills.length > 0) && (
                    <div className="mt-2 flex flex-wrap gap-2 justify-center">
                        {personaSoftskills.map((s, i) => (
                            <span key={i} className={`text-xs md:text-sm ${lightModeOn ? 'bg-black/3 text-[#222]' : 'bg-white/5 text-white'} px-3 py-1 rounded-full`}>{s}</span>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-2 mt-4 gap-4 w-full"> 
                    <button className={`text-[14px] md:text-[16px] border rounded-full p-2 px-3 flex items-center gap-2 justify-center ${lightModeOn ? 'text-[#0077cc] border-[#0077cc]' : 'text-[#9974FF] border-[#9974FF]'}`}>
                        <img src={lightModeOn ? iconeEmailLight : iconeEmailDark} alt="email" className="w-5 h-5" />
                        Mensagem
                    </button>
                    <button className={`text-[14px] md:text-[16px] rounded-full p-2 px-3 flex items-center gap-2 justify-center text-white bg-[#7C4DFF]`}>
                        <img src={iconeRecomendar} alt="recomendar" className="w-5 h-5" />
                        Recomendar
                    </button>
                </div>

                {(idiomas && idiomas.length > 0) && (
                    <div className="mt-3 w-full text-sm">
                        <h4 className={`text-left mb-1 ${lightModeOn ? 'text-[#444]' : 'text-[#d6d6e8]'}`}>Idiomas</h4>
                        <ul className="text-sm">
                            {idiomas.map((l, i) => (
                                <li key={i} className="flex justify-between border-t border-white/10 py-1">
                                    <span className={lightModeOn ? 'text-[#444]' : 'text-[#d6d6e8]'}>{l.idioma || l.language}</span>
                                    <span className={`font-medium ${lightModeOn ? 'text-[#222]' : ''}`}>{l.nivel || l.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card