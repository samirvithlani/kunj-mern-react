import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

export const SelectedBook = () => {
    const {books} = useContext(BookContext)
    console.log("selected books",books)
  return (
    <div>
        <h1>SelectedBook</h1>
    </div>
  )
}
