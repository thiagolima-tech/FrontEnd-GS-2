import React, { useState } from 'react';
import iconSearchPreto from '../assets/iconSearchPreto.svg';
import iconSearchBranco from '../assets/iconSearchBranco.svg';


const Input = ({ onFocus, onBlur, onChange, value, lightModeOn }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
        if (typeof onFocus === 'function') onFocus(e);
    }

    const handleBlur = (e) => {
        setFocused(false);
        if (typeof onBlur === 'function') onBlur(e);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="relative w-[90%] md:w-[50%] mt-10 mb-5">
                <img
                    src={lightModeOn ? iconSearchPreto : iconSearchBranco}
                    alt="Buscar"
                    className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none"
                />

                <input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`border-2 ${lightModeOn ? "text-black border-black" : "text-white border-white"} rounded-full text-2xl placeholder:text-[#5E5E5E] py-3 pl-14 w-full bg-transparent focus:outline-none focus:ring-0 focus-visible:outline-none ${focused ? 'drop-shadow-[0_0_50px_#ffffff]' : ''}`}
                    type="text"
                    placeholder="Buscar"
                />
            </div>
        </div>
    )
}

export default Input