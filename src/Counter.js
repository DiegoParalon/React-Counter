import React, { useState, useEffect} from 'react'
import './Counter.css'

const Counter = operador => {
    const [contador, setContador] = useState(0)
    const [teste, setTeste] = useState('teste123')

    useEffect( () => {
        console.log('ok')
    }, [])

    useEffect( ()=> {
        console.log('teste456')

    }, [teste])
    

    const handleOnClick = operador => {
        let novoContador = operador === '+' ?
         contador + 1 :
         contador - 1
        setContador(novoContador)
    }



    return (
        <div className='counter'>
            <span>{contador}</span>
            <button onClick= {() => handleOnClick('-')} >-</button>
            <button onClick={() => handleOnClick('+')}>+</button>
            <button onClick= {() => setTeste('teste451')} >TESTE</button>
        </div>
    )


}

export default Counter