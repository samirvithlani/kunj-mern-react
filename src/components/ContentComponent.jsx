import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchApi } from '../redux/ContentSlice'

export const ContentComponent = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchApi())
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Content Component...</h1>
    </div>
  )
}
