import React, {useState} from 'react'
import './Counter.css'

const Counter = operador => {
    const [contador, setContador] = useState(0)
    

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
        </div>
    )


}

export default Counter