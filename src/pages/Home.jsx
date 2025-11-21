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
import FormMessage from "../components/FormMessage";

const Home = () => {
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [lightModeOn, setLightModeOn] = useState(false);
    const [recommended, setRecommended] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedPersona, setSelectedPersona] = useState(null);
    const [showForm, setShowForm] = useState(false);

    // NOVO: controla quando exibir todos os cards
    const [showAllResults, setShowAllResults] = useState(false);

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
            className="relative gradient-dark w-full min-h-screen flex flex-col justify-center transition-all duration-200 items-center"
        >

            {/* LOGO TEXTO */}
            <img
                onClick={() => {
                    setIsFocused(false);
                    setShowAllResults(false); // reset ao clicar no logo
                }}
                className={`z-20 absolute top-5 md:left-25 lg:left-40 md:top-15 ${
                    isFocused ? "block" : "hidden"
                }`}
                src={ProConnectTexto}
                alt="Logotipo Pro Connect"
            />

            {/* LIGHT / DARK MODE */}
            {!modalIsOpen && (
                <img
                    id="lightMode"
                    onClick={() => setLightModeOn((s) => !s)}
                    className="absolute top-8 right-8 md:top-15 md:right-15 cursor-pointer z-90"
                    src={lightModeOn ? darkMode : lightMode}
                    alt={lightModeOn ? "darkMode" : "lightMode"}
                />
            )}

            {/* TÍTULO */}
            <h1
                className={`transform font-raleway leading-tight w-[311px] md:w-[765px] text-center ${
                    lightModeOn ? "text-[#464646]" : "text-white"
                } text-[40px] md:text-8xl transition-all duration-200 ${
                    isFocused ? "hidden" : "block"
                }`}
            >
                Veja o futuro dos{" "}
                <span className="font-medium text-roxo" style={{ color: "var(--roxo)" }}>
                    profissionais
                </span>
            </h1>

            {/* INPUT */}
            <div
                className={`w-full flex md:pb-14 justify-center transition-all duration-300 ease-out ${
                    isFocused ? "absolute top-15 md:top-4 left-1/2 -translate-x-1/2" : "relative"
                }`}
            >
                <div className="w-full">
                    <Input
                        value={search}
                        onChange={(txt) => {
                            setSearch(txt);
                            if (txt !== "") setShowAllResults(false); // digitar → volta à busca normal
                        }}
                        onFocus={() => setIsFocused(true)}
                        lightModeOn={lightModeOn}
                    />

                    {/* MOSTRAR TODOS OS RESULTADOS */}
                    <p
                        onClick={() => {
                            setShowAllResults(true);
                            setIsFocused(true);
                        }}
                        className={`underline underline-offset-[3px] md:mt-3 text-[16px] cursor-pointer text-center ${
                            lightModeOn ? "text-[#464646]" : "text-white"
                        }`}
                    >
                        Mostrar todos os resultados
                    </p>
                </div>
            </div>

            {/* LOGO CENTRAL */}
            <img
                className={`absolute bottom-6 md:top-[-60px] mx-auto w-[286px] ${
                    isFocused ? "hidden" : "block"
                }`}
                src={ProConnectLogo}
                alt="Logotipo Pro Connect"
            />

            {/* DIGITE PARA BUSCAR */}
            {isFocused && search === "" && !showAllResults && (
                <SearchWait lightModeOn={lightModeOn} />
            )}

            {/* ÍCONE FUNDO */}
            {isFocused && (
                <img
                    className="absolute w-70 md:bottom-0 md:right-8 lg:right-15 opacity-35 md:opacity-100"
                    src={iconeLogo}
                    alt="Icone Pro Connect"
                />
            )}

            {/* GRID DE CARDS */}
            {(search !== "" || showAllResults) && (
                <div className="mt-10 w-full flex justify-center mt-[55%] md:mt-[15%]">
                    <div className="w-[90%] md:w-[80%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(personas || [])
                                .filter((p) => {
                                    if (showAllResults) return true;
                                    if (!search) return false;
                                    return p.nome.toLowerCase().includes(search.toLowerCase());
                                })
                                .map((p) => (
                                    <div key={p.id || p.nome} className="w-full flex justify-center">
                                        <Card
                                            key={p.id}
                                            data={p}
                                            lightModeOn={lightModeOn}
                                            isRecommended={recommended[p.id] || false}
                                            onOpenModal={() => openModal(p)}
                                            handleMessage={() => setShowForm(true)}
                                            onToggleRecommend={() => {
                                                setRecommended((prev) => ({
                                                    ...prev,
                                                    [p.id]: !prev[p.id],
                                                }));
                                            }}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                className="relative w-[95%] md:w-[80%] lg:w-[70%] max-w-5xl bg-[#140C2A] text-white rounded-3xl p-6 md:p-10 outline-none shadow-2xl max-h-[90vh] overflow-y-auto"
                contentLabel="Perfil do profissional"
            >
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-sm md:text-base px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                    ✕
                </button>

                {selectedPersona && (
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* ... (todo o conteúdo interno do modal permanece igual) */}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Home;
