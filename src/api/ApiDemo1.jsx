import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getApiCall =async()=>{
        //Promise<AxiosResponse<any, any, {}>>
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res) //axios object
        console.log(res.data) //api response...
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <button onClick={()=>{getApiCall()}}>GET</button>
        <h1>API DEMO 1</h1>
        {message}
        <ul>
            {
                users.map((user)=>{
                    return<li>{user.name}</li>
                })
            }
        </ul>
    </div>
  )
}
