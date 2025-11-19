import React, { useState } from 'react';
import iconSearch from '../assets/iconSearch.png';


const Input = ({ onFocus, onChange, value }) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
        if (typeof onFocus === 'function') onFocus(e);
    }

    return (
        <div className="w-full flex justify-center">
            <div className="relative w-[90%] md:w-[50%] mt-10 mb-5">
                <img className='absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none' src={iconSearch} alt="icone pesquisar" />
                <input
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    onFocus={handleFocus}
                    className={`
                                border-2 text-white border-white rounded-full text-2xl
                                placeholder:text-[#5E5E5E] py-3 pl-14 w-full bg-transparent
                                focus:outline-none focus:ring-0 focus-visible:outline-none
                                ${focused ? 'drop-shadow-[0_0_40px_#ffffff]' : ''}
                            `}
                    type="text"
                    placeholder="Buscar"
                />
            </div>
        </div>
    )
}

export default Input