import React, { useState } from 'react'
import { BookList } from './BookList'
import { BookContext } from '../context/BookContext'

export const Books = () => {
    const [books, setbooks] = useState([
        {id:1,name:"java",price:1000,status:false},
        {id:1,name:"cpp",price:2000,status:false},
        {id:1,name:"champak",price:100,status:true},
        {id:1,name:"Python",price:4000,status:false},
    ])
  return (
    <div style={{textAlign:"center"}}>
        <h1>BOOKS COMPONENT</h1>
        <BookContext.Provider value={{books}}>
            <BookList></BookList>
        </BookContext.Provider>
    </div>
  )
}
