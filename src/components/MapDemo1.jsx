import React from 'react'

export const MapDemo1 = () => {
    var users =["ram","shyam","amit","sumit"]
  return (
    <div>
        {
            users.map((u)=>{
                return <h1>{u}</h1>
            })
        }
    </div>
  )
}
