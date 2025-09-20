import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[isLoading,setIsLoading]=useState(true)
    //component will rerender
    //isloa....variable
    //set.. function
    const stopLoader  = ()=>{
        setIsLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO</h1>
        {
            isLoading == true && <h1>Loading......</h1>
        }
        <button onClick={stopLoader}>stop</button>
    </div>
  )
}
