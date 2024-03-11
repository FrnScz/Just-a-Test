import styled from "styled-components"

const ContainerListaEstilizado = styled.div`
    display: flex;


`

const ListaEstilizado = styled.ul`
    list-style: none;
    height: 100px;


    li{
        width: 100px;
    
        border: 1px solid red;
        text-align: center;
    }
`




const Lista = ({lista})=>{
    return (
        <ContainerListaEstilizado>
            <ListaEstilizado>
               {lista.map(item => {
                return(<li key={item}>
                    {item}
                </li>) 
                 
               })}
                </ListaEstilizado>
        </ContainerListaEstilizado>
    )
}

export default Lista