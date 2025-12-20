import React, { useMemo, useState } from 'react'

export const UseMemoDemo1 = () => {
    const [count, setcount] = useState(0)
    const [count2, setcount2] = useState(0)
    //const randomNo= Math.floor(Math.random()*1000)
    // const randomNo = useMemo(()=>{
    //     return Math.floor(Math.random()*1000)
    // },[])


    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[count2])

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO DEMO</h1>
        <h1>count 1 = {count}</h1>
        <h1>count 2 = {count2}</h1>
        <h3>random no{randomNo}</h3>
        <button onClick={()=>{setcount(count+1)}}>count +</button>
        <button onClick={()=>{setcount2(count2+1)}}>count2 ++</button>
    </div>
  )
}
