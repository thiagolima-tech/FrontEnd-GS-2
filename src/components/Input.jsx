import { useState } from "react"


const Input = ({onFocus, onBlur, onChange, value}) =>{

    return (
        <div className="w-full items-center flex justify-center">
            <input
                value={value}
                onChange={e => onChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                className="border-2 border-white rounded-full placeholder:text-[#5E5E5E] mt-10 p-5 w-[70%] transition-all duration-200"
                type="text"
                placeholder="Buscar"
            />
        </div>
    )
}

export default Input