import React, { useState } from 'react'
import "./Style.css"

const Counter = () => {
    const [count,setCount] = useState(0)

    const increment= ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        if(!count==0){
            setCount(count-1)
        }
       
    }
  return (
    <>
    <div className="container">
        <h1 className="number">{count}</h1>
    </div>
    <section className="btns-container">
        <button className="increment" onClick={increment}>+</button>
        <button className="decrement" onClick={decrement}>-</button>
    </section>
    </>
  )
}

export default Counter