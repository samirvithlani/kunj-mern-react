import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const [movies, setmovies] = useState([])
    const [query, setquery] = useState("")
    const searchMovie = async()=>{

        // const res = await axios.get("http://www.omdbapi.com/?apikey=9d57be0b&s=Avatar")
        const res = await axios.get(`http://www.omdbapi.com/?apikey=9d57be0b&s=${query}`)
        console.log(res.data) //api sresponse...
        setmovies(res.data.Search)


    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>OMDB API</h1>
        <input type='text' onChange={(event)=>{setquery(event.target.value)}}></input>
        <button onClick={()=>{searchMovie()}}>SEARCH</button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>ID</th>
                        <th>YEAR</th>
                        <th>POSTER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie)=>{
                            return<tr>
                                <td>{movie.Title}</td>
                                <td>{movie.imdbID}</td>
                                <td>{movie.Year}</td>
                                <td>
                                    <img style={{height:"150px",width:"150px"}} src={movie.Poster}></img>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
