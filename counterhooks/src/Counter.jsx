import React from 'react'
import { useState } from 'react'

const Counter=()=>
{
    let[Count,setCount]=useState(0)

   let handleIncrement=()=>
    {
        setCount(Count+1)
    }
    let handleDecrement=()=>
    {
        setCount(Count-1)
    }

    let handleReset=()=>
    {
        setCount(0)
    }
    return(
        <div>
            <h1>{Count}</h1>
            <button onClick={handleIncrement}> + INCREMENT</button>
            <button onClick={handleDecrement}> - DICREMENT</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Counter;