import iconeEmailDark from '../assets/iconeEmailDarkMode.png';
import iconeEmailLight from '../assets/iconeEmailLightMode.png';
import iconeRecomendar from '../assets/iconeRecomendar.png';
import placeholderImg from '../assets/ProConnectLogo.png';
import estrelaCinza from '../assets/estrelaCinza.png';
import estrelaAmarela from '../assets/estrelaAmarela.png';

const Card = ({handleMessage, data = {}, lightModeOn = false, isRecommended = false, onOpenModal, onToggleRecommend }) => {
    const personaImg = data.foto || data.img || '';
    const personaName = data.nome || data.name || '';
    const personaJob = data.cargo || data.job || '';
    const personaHardskills = data.hardskills || data.skills || [];

    const resolveImg = (src) => {
        if (!src) return placeholderImg;
        if (String(src).startsWith('/mnt')) return placeholderImg;
        return src;
    };

    return (
        <div
            className={`relative gradient-card-dark shadow-card flex flex-col w-[88%] md:w-[95%] rounded-2xl p-10 my-8 ${lightModeOn ? 'text-[#222]' : 'text-white'}`}
            onClick={onOpenModal}  // ← continua abrindo o modal ao clicar no card
        >
            {isRecommended ? (
                <div className="absolute top-5 right-5">
                    <img src={estrelaAmarela} alt="Recomendado" className="w-8 h-8" />
                </div>
            ) : (
                <div className="absolute top-5 right-5">
                    <img src={estrelaCinza} alt="Não Recomendado" className="w-8 h-8" />
                </div>
            )}

            <div className="flex flex-col items-center">

                <img
                    src={resolveImg(personaImg)}
                    alt={personaName ? `${personaName} - foto` : 'imagem profissional'}
                    className="rounded-full w-[178px] h-[178px] object-cover"
                />

                <h2 className="text-2xl md:text-3xl mt-3 font-semibold text-center md:text-center">
                    {personaName}
                </h2>

                <h3 className={`text-xl md:text-xl mt-1 text-center md:text-center ${lightModeOn ? 'text-[#444]' : 'text-[#cfcfe8]'}`}>
                    {personaJob}
                </h3>

                <p className={`text-xl md:text-xl mt-1 text-center md:text-center ${lightModeOn ? "text-[#666]" : "text-[#bfbfdc]"}`}>
                    {personaHardskills.slice(0, 3).map((i, idx) => (
                        <span key={idx} className="mr-1">{i}</span>
                    ))}
                </p>

                <div className="grid grid-cols-2 mt-8 gap-2 md:gap-2 w-full text-center md:text-left">

                    {/* Botão Mensagem */}
                    <button
                        className={`text-[14px] md:text-[16px] border rounded-full p-2 px-5 flex items-center gap-1 justify-center ${lightModeOn ? 'text-[#7C4DFF] border-[#7C4DFF]' : 'text-[#9974FF] border-[#9974FF]'}`}
                        onClick={handleMessage}
                    >
                        <img src={lightModeOn ? iconeEmailLight : iconeEmailDark} alt="email" className="hidden md:block w-5 h-5" />
                        Mensagem
                    </button>

                    {/* Botão Recomendar */}
                    <button
                        className="text-[14px] md:text-[16px] rounded-full p-2 px-5 flex items-center gap-1 justify-center 
                        bg-[#7C4DFF] text-white"
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleRecommend();
                        }}
                    >
                        <img src={iconeRecomendar} alt="recomendar" className="hidden md:block w-5 h-5" />
                        {isRecommended ? "Recomendado" : "Recomendar"}
                    </button>

                </div>
            </div>

        
        </div >
    );
};

export default Card;
