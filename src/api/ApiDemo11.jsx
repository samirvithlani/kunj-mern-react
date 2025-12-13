import React from 'react'
import { useFetchApi } from '../hooks/FetchApiHook'

export const ApiDemo11 = () => {
    const {data,isLoading,error}=useFetchApi("https://node5.onrender.com/user/user")
    console.log("data",data)
    console.log("error",error)
  return (
    <div>
        <h1>API DEMO 11</h1>
        <h1>
            {isLoading && "Loading....."}
        </h1>
    </div>
  )
}
