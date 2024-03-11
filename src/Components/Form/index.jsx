import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import { useState } from "react"


const FormEstilizado = styled.form`
    display: flex;
    flex-direction: column;

`

const Form = ({setLista}) => {
    const [texto,setTexto] = useState('')
    const aoEnviar = (evento) =>{
        evento.preventDefault()
        setLista(texto)
        setTexto('')
    }

   


    return(
        <FormEstilizado onSubmit={aoEnviar} action="submit">
            <CampoTexto setTexto={setTexto} texto={texto}  label={'Escreva aqui o item da sua lista'}/>
            <button type="submit">Adicionar</button>

        </FormEstilizado>
    )
}

export default Form