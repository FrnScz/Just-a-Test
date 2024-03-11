import { useState } from "react"
import styled from "styled-components"

const ContainerEstilizado = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column-reverse;
`

const CampoTexto = ({label, setTexto,texto})=>{

    return(
        <ContainerEstilizado>
            <input value={texto} onChange={(evento)=>  setTexto(evento.target.value) } type="text" id="texto" />
            <label htmlFor="texto">{label}</label>
        </ContainerEstilizado>
    )
}

export default CampoTexto