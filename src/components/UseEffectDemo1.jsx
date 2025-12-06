import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {
    //()=>{}callback function,[] -->deped array
    var score=0;
    const scoreHandler = ()=>{
        score++
        console.log(score)
    }
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("useEffect called..")
    },[count])
    
  return (
    <div>
        <h1>USE EFFECT DEMO</h1>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        <button onClick={()=>{scoreHandler()}}>++</button>
    </div>
  )
}
