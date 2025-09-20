import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    //var count =0;
    //hook
    //count --stateVaribel
    //setCount -- function: to update value of count...
    const[count,setCount]=useState(0) //Number

    const increseCount = ()=>{
      //  count++
        setCount(count+1)
        console.log("count ",count)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO</h1>
        <h2>{count}</h2>
        <button onClick={increseCount}>INCRESE</button>
        {/* <button onClick={()=>{increseCount()}}>INCRESE 2</button> */}
    </div>
  )
}
