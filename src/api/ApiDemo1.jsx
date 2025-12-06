import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../components/Loader'

export const ApiDemo1 = () => {
    //DELETE//https://node5.onrender.com/user/user/salnshashsau98y3u892us

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const getApiCall =async()=>{
        //Promise<AxiosResponse<any, any, {}>>
        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res) //axios object
        console.log(res.data) //api response...
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
        setisLoading(false)
    }

    const deleteUser = async(id)=>{
        const res = await axios.delete(`https://node5.onrender.com/user/user/${id}`)
        console.log(res)
        if(res.status == 204){
            alert("user deleted...")
            //getAPI CALL...database updated..
            getApiCall()
        }
    }
    useEffect(()=>{
        getApiCall()
    },[])

  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <Loader/>
        }
        {/* <button onClick={()=>{getApiCall()}}>GET</button> */}
        <h1>API DEMO 1</h1>
        {message}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                    <th>ACTION</th>

                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return<tr>
                            <td
                            >{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.isActive ?"True":"False"}</td>
                            <td>
                                <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
