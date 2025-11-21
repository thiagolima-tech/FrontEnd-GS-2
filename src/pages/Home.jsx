import React, { useState } from "react";
import Input from "../components/Input";
import lightMode from "../assets/light_mode.png";
import darkMode from "../assets/dark_mode.svg";
import ProConnectTexto from "../assets/ProConnectTexto.png";
import ProConnectLogo from "../assets/ProConnectLogo.png";
import SearchWait from "../components/SearchWait";
import Card from "../components/Card";
import personas from "../personas60.json";
import iconeLogo from "../assets/IconeProConnect.png";
import Modal from "react-modal";
import iconeEmailDark from '../assets/iconeEmailDarkMode.png';
import iconeEmailLight from '../assets/iconeEmailLightMode.png';
import iconeRecomendar from '../assets/iconeRecomendar.png';
import estrelaCinza from '../assets/estrelaCinza.png';
import estrelaAmarela from '../assets/estrelaAmarela.png';

// se ainda não tiver feito em outro lugar, você pode chamar:
// Modal.setAppElement('#root') no index.js/main.jsx

const Home = () => {
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [lightModeOn, setLightModeOn] = useState(false);

    const [recommended, setRecommended] = useState({});

    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedPersona, setSelectedPersona] = useState(null);

    const openModal = (persona) => {
        setSelectedPersona(persona);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedPersona(null);
    };

    return (
        <div
            style={
                lightModeOn
                    ? { background: "linear-gradient(180deg, #FFFFFF 32%, #DFCCFF 100%)" }
                    : undefined
            }
            className={`relative gradient-dark w-full min-h-screen flex flex-col justify-center transition-all duration-200 items-center`}
        >
            {/* IMG DO LOGOTIPO  */}
            <img
                onClick={() => setIsFocused(false)}
                className={`z-20 absolute top-5 md:left-25 lg:left-40 md:top-15 ${isFocused
                    ? "block translate-y-0"
                    : "hidden -translate-y-4 scale-75"
                    }`}
                src={ProConnectTexto}
                alt="Logotipo Pro Connect"
            />

            {/* ICONES DE LIGHT E DARK MODE  */}
            {!modalIsOpen && (
                <img
                    id="lightMode"
                    onClick={() => setLightModeOn(currentState => !currentState)}
                    className="absolute top-8 right-8 md:top-15 md:right-15 cursor-pointer z-90"
                    src={lightModeOn ? darkMode : lightMode}
                    alt={lightModeOn ? "darkMode" : "lightMode"}
                />
            )}



            {/* TITULO  */}
            <h1
                className={`transform font-raleway leading-tight w-[311px] md:w-[765px] text-center ${lightModeOn ? "text-[#464646]" : "text-white"
                    } text-[40px] md:text-8xl transition-all duration-200 ease-in-out ${isFocused ? "hidden -translate-y-4 scale-75" : "block translate-y-0"
                    }`}
            >
                Veja o futuro dos{" "}
                <span
                    className="font-medium text-roxo"
                    style={{ color: "var(--roxo)" }}
                >
                    profissionais
                </span>
            </h1>

            {/* INPUT DE BUSCA */}
            <div
                className={`w-full flex md:pb-14 justify-center transition-all duration-300 ease-out ${isFocused ? "absolute top-15 md:top-4 left-1/2 -translate-x-1/2" : "relative"
                    }`}
            >
                <div className="w-full">
                    <Input
                        value={search}
                        onChange={setSearch}
                        onFocus={() => setIsFocused(true)}
                        lightModeOn={lightModeOn}
                    />
                    <p
                        className={`underline underline-offset-[3px] md:mt-3 text-[16px] ${lightModeOn ? "text-[#464646]" : "text-white"
                            } transform transition-all duration-300 ease-out text-center`}
                    >
                        Mostrar todos os resultados
                    </p>
                </div>
            </div>

            {/* LOGO CENTRAL */}
            <img
                className={`absolute bottom-6 md:top-[-60px] mx-auto w-[286px] ${isFocused ? "hidden -translate-y-4 scale-75" : "block translate-y-0"
                    }`}
                src={ProConnectLogo}
                alt="Logotipo Pro Connect"
            />

            {/* ESTADO DE “DIGITE PARA BUSCAR” */}
            {isFocused && search === "" && <SearchWait lightModeOn={lightModeOn} />}

            {isFocused && (
                <img
                    className="absolute w-70 md:bottom-0 md:right-8 lg:right-15 mx-auto bottom-0 opacity-35 md:opacity-100"
                    src={iconeLogo}
                    alt="Icone Pro Connect"
                />
            )}

            {/* GRID DE CARDS */}
            {search !== "" && (
                <div className="mt-10 w-full flex justify-center mt-[55%] md:mt-[15%]">
                    <div className="w-[90%] md:w-[80%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(personas || [])
                                .filter(
                                    (p) =>
                                        !search ||
                                        String(p.nome || "")
                                            .toLowerCase()
                                            .includes(search.toLowerCase())
                                )
                                .map((p) => (
                                    <div
                                        key={p.id || p.nome}
                                        className="w-full flex justify-center"
                                    >
                                        <div className="flex justify-center items-center">
                                            <Card
                                                key={p.id}
                                                data={p}
                                                lightModeOn={lightModeOn}
                                                isRecommended={recommended[p.id] || false}
                                                onOpenModal={() => openModal(p)}
                                                onToggleRecommend={() => {
                                                    setRecommended(prev => ({
                                                        ...prev,
                                                        [p.id]: !prev[p.id]
                                                    }));
                                                }}
                                            />

                                        </div>

                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL DETALHADO */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                className="
                relative w-[95%] md:w-[80%] lg:w-[70%] max-w-5xl
                bg-[#140C2A] text-white rounded-3xl p-6 md:p-10 outline-none shadow-2xl
                max-h-[90vh] overflow-y-auto custom-scroll
                "


                contentLabel="Perfil do profissional"
            >

                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-sm md:text-base px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                    ✕
                </button>

                {recommended[selectedPersona?.id] ? (
                    <div className="absolute top-20 right-10 md:right-20">
                        <img src={estrelaAmarela} alt="Recomendado" className="w-8 h-8" />
                    </div>
                ) : (
                    <div className="absolute top-20 right-10 md:right-20">
                        <img src={estrelaCinza} alt="Não Recomendado" className="w-8 h-8" />
                    </div>
                )}


                {selectedPersona && (
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* topo: foto + dados básicos */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex justify-center md:block">
                                <img
                                    src={selectedPersona.foto}
                                    alt={selectedPersona.nome}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500/60 shadow-xl"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl md:text-3xl font-semibold">
                                    {selectedPersona.nome}
                                </h2>
                                <p className="mt-1 text-sm md:text-base text-purple-200">
                                    {selectedPersona.cargo} – {selectedPersona.area}
                                </p>
                                <p className="text-xs md:text-sm text-gray-300 mt-1">
                                    {selectedPersona.localizacao}
                                </p>

                                {/* chips */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {(selectedPersona.hardskills || []).map((skill, idx) => (
                                        <span
                                            key={`hard-${idx}`}
                                            className="px-3 py-1 rounded-full text-xs md:text-sm bg-purple-700/70"
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                    {(selectedPersona.softskills || []).map((skill, idx) => (
                                        <span
                                            key={`soft-${idx}`}
                                            className="px-3 py-1 rounded-full text-xs md:text-sm bg-emerald-500/80"
                                        >
                                            {skill}
                                        </span>
                                    ))}

                                    {(selectedPersona.idiomas || []).map((lang, idx) => (
                                        <span
                                            key={`lang-${idx}`}
                                            className="px-3 py-1 rounded-full text-xs md:text-sm bg-cyan-500/80"
                                        >
                                            {lang.idioma} ({lang.nivel})
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* resumo + áreas de interesse */}
                        <div className="space-y-3 text-sm md:text-base">
                            <div>
                                <h3 className="font-semibold">Resumo:</h3>
                                <p className="text-gray-200">{selectedPersona.resumo}</p>
                            </div>

                            {selectedPersona.areasInteresses &&
                                selectedPersona.areasInteresses.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold">Áreas de Interesse:</h3>
                                        <p className="text-gray-200">
                                            {selectedPersona.areasInteresses.join(", ")}
                                        </p>
                                    </div>
                                )}
                        </div>

                        {/* 3 colunas: experiência / formação / projetos */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm md:text-base">
                            {/* EXPERIÊNCIA */}
                            <div className="bg-[#1C1235] rounded-2xl p-4 md:p-5">
                                <h4 className="font-semibold mb-3">EXPERIÊNCIA</h4>
                                <ul className="space-y-2 text-gray-200">
                                    {(selectedPersona.experiencias || []).map((exp, idx) => (
                                        <li key={idx}>
                                            <p className="font-medium">
                                                {exp.cargo} – {exp.empresa}
                                            </p>
                                            <p className="text-xs text-gray-300">
                                                {exp.inicio} até {exp.fim}
                                            </p>
                                            <p className="text-xs mt-1">{exp.descricao}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* FORMAÇÃO & CERTIFICADOS */}
                            <div className="bg-[#1C1235] rounded-2xl p-4 md:p-5">
                                <h4 className="font-semibold mb-3">FORMAÇÕES E CERTIFICADOS</h4>

                                <ul className="space-y-2 text-gray-200 mb-3">
                                    {(selectedPersona.formacao || []).map((form, idx) => (
                                        <li key={idx}>
                                            <p className="font-medium">{form.curso}</p>
                                            <p className="text-xs text-gray-300">
                                                {form.instituicao} · {form.ano}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                {selectedPersona.certificados && (
                                    <div>
                                        <p className="font-semibold text-xs mb-1">Certificados:</p>
                                        <ul className="space-y-1 text-gray-200 list-disc list-inside">
                                            {selectedPersona.certificados.map((cert, idx) => (
                                                <li key={idx}>{cert}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* PROJETOS */}
                            <div className="bg-[#1C1235] rounded-2xl p-4 md:p-5">
                                <h4 className="font-semibold mb-3">PROJETOS</h4>
                                <ul className="space-y-2 text-gray-200">
                                    {(selectedPersona.projetos || []).map((proj, idx) => (
                                        <li key={idx}>
                                            {proj.link ? (
                                                <a
                                                    href={proj.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="font-medium underline underline-offset-2 hover:opacity-80"
                                                >
                                                    {proj.titulo}
                                                </a>
                                            ) : (
                                                <p className="font-medium">{proj.titulo}</p>
                                            )}
                                            <p className="text-xs mt-1">{proj.descricao}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* botões do rodapé */}
                        <div className="flex flex-col md:flex-row justify-end gap-3 md:gap-4 mt-2">
                            <button className="w-full md:w-auto px-6 py-3 rounded-full border border-purple-400/70 text-sm md:text-base hover:bg-white/5 transition flex items-center justify-center gap-2">
                                <img src={iconeEmailDark} alt="Icone de mensagem" />
                                <span className="text-[#9974FF]">Mensagem</span>
                            </button>

                            <button
                                className="w-full md:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm md:text-base font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                                onClick={() => {
                                    setRecommended(prev => ({
                                        ...prev,
                                        [selectedPersona.id]: !prev[selectedPersona.id]   // alterna
                                    }));
                                }}
                            >
                                <img src={iconeRecomendar} alt="Icone de recomendar" />
                                <span>{recommended[selectedPersona.id] ? "Recomendado" : "Recomendar"}</span>
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Home;
