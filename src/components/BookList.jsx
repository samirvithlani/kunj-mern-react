import React, { useContext } from 'react'
import { SelectedBook } from './SelectedBook'
import { BookContext } from '../context/BookContext'

export const BookList = () => {
    // const {books} = useContext(BookContext)
    // console.log("books...",books)
    
  return (
    <div>
        <h1>BOOK LIST</h1>
        <SelectedBook></SelectedBook>
    </div>
  )
}
