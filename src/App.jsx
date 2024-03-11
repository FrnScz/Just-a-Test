import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import EstilosGlobais from './Components/EstilosGlobais'
import { useCounter } from './hooks/UseCounter'



const Fundo = styled.div`
  width:100%;
  background-color:#ffffff;
  height: 100vh;


`
const ContainerApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`


function App() {
  const [count, setCount] = useState()
  const {contador, addContador,zeraContador} = useCounter()
  const [mousePressionado, setMousePressionado] = useState(null)
  const [mousePressionadoPorDoisSegundos,setMousePressionadoPorDoisSegundos] = useState(false)
  const tempoMousePressionado = useRef(null);
  const [tempoMouse, setTempoMouse] = useState(2000)

    const addOuRemove = () =>{
      setMousePressionado(true)
      tempoMousePressionado.current = Date.now() 
      addContador()
      console.log(mousePressionado)
}

    
const verificaMousePressionado = () => {
    if (mousePressionado) {
      const tempoDoMouse = Date.now() - tempoMousePressionado.current;
      console.log(tempoDoMouse)

      if (tempoDoMouse >= 2000) {
        zeraContador();
        setMousePressionado(false);
      }
    }
  };

   const handleMouseUp = ()=>{
    setMousePressionado(false)
    console.log(mousePressionado)
   } 

  const handleMouseDown = () => {
    addOuRemove()
  }
    
  useEffect(() => {
    let timeoutId;

    if (mousePressionado) {
      timeoutId = setTimeout(() => verificaMousePressionado(), 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [mousePressionado]);
  
  
  return (
    <Fundo>
     <EstilosGlobais/> 
    <ContainerApp>
        
        <p>{contador}</p> 
        
        <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} >Clique</button>
        

        </ContainerApp>
        </Fundo> 
  )
}

export default App
