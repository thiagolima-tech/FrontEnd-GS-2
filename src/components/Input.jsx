import { useState } from "react"


const Input = () =>{
    const [search, setSearch] = useState('')

    return (
        <div className="flex w-full justify-center">
            <input onChange={e => setSearch(e.target.value)} className="border-2 border-white rounded-full my-10 placeholder:text-[#5E5E5E] p-5 w-[90%] md:w-[50%]" type="text" placeholder="Buscar"/>
        </div>
    )
}

export default Input