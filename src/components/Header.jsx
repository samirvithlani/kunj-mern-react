import React from 'react'
//link rel style href
//class -- >dom - className
import "../assets/css/header.css"

export const Header = (props) => {
  console.log("header props",props)
  //{title: 'REACT JS'}
  return (
    <div className='header'>
        <h1>HEADER COMPONENT</h1>
        <h1>{props.title}</h1>
    </div>
  )
}
