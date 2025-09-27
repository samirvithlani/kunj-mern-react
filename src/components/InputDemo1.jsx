import React, { useState } from 'react'

export const InputDemo1 = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)
    const [choosedColor, setchoosedColor] = useState("black")
    const nameHandler = (event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
    // const ageHandler = (event)=>{
    //     setage(event.target.value)
    // }

    const submitHandler = ()=>{
        //alert(`Name = ${name} \n age ${age}`)
        setisSubbmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            {/* <input type='text' onChange={(event)=>{ageHandler(event)}}></input> */}
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
            {/* {age} */}
        </div>
        <div>
            <label>CHOOSE COLOR</label>
            <input type='color' onChange={(event)=>{setchoosedColor(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>submit</button>
        </div>

        {
            isSubbmited &&  <div style={{color:choosedColor}}>
            <h1>OUTPUT</h1>
            <h1>NAME = {name}</h1>
            <h2>AGE = {age}</h2>
        </div>
        }
        
    </div>
  )
}
