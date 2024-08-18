import React, { useState } from 'react'

const Counter = () => {

    const [data, setData] = useState({
        counter: 0,
        increment: 0,
        decrement:0
    });

    const handlePlusClick = () => {
        setData(prevData=>({
            counter:prevData.counter+1,
            increment:prevData.increment+1,
            decrement:prevData.decrement
        }))
    }

    const handleMinusClick = () => {
        setData(prevData=>({
            counter:prevData.counter-1,
            increment:prevData.increment,
            decrement:prevData.decrement+1
        }))
    }

  return (
    <>
    <h2>COUNTER:</h2>
    <div>Single/combined state object to manage multiple operations</div>
    <p>You clicked the + button {data.increment} times.</p>
    <p>You clicked the - button {data.decrement} times.</p>
    <button onClick={handleMinusClick}>-</button>
    <span>  {data.counter}  </span>
    <button onClick={handlePlusClick}>+</button>
    </>
  )
}

export default Counter