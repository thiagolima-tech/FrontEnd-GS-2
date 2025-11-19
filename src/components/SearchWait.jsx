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
                transition-all duration-700 ease-out transform md:h-[364px] md:w-[700px] lg:w-[980px] md:px-20 mt-20
                ${show ? "block translate-y-0" : "hidden translate-y-4"}
            `}
        >
            <h2 className=" text-white text-start text-[40px] md:text-[75px] leading-[3.5rem] md:leading-[6rem]">
                Busque <span className="block md:inline font-normal">pelos</span> <strong className="font-medium text-[var(--roxo)]">melhores profissionais</strong>
            </h2>
        </div>
    );
};

export default SearchWait;
