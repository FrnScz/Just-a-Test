import { useState } from "react"

export const useCounter = ()=>{
    const [contador, setContador] = useState(0)

    function addContador () {
        setContador((contador) => contador +=1)
    }

    function zeraContador () {
        setContador(0)
    }

    return{
        contador,
        addContador,
        zeraContador
    }
}