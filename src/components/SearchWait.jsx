import { useEffect, useState } from "react";

const SearchWait = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // dá 1 frame de atraso para permitir a animação
        requestAnimationFrame(() => setShow(true));
    }, []);

    return (
        <div
            className={`p-8 py-18 w-[80%] rounded-4xl
                rounded-tr-[115px]
                flex flex-col justify-center text-center
                shadow-roxo
                transition-all duration-700 ease-out transform
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
        >
            <h2 className="text-white text-start text-[40px] leading-[3.5rem]">
                Busque <span className="block md:inline">pelos</span> <strong className="text-[var(--roxo)]">melhores profissionais</strong>
            </h2>
        </div>
    );
};

export default SearchWait;
