import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
    const movies = [
        {
            id:101,
            name:"Raid 2",
        },
        {
            id:102,
            name:"sector 36"
        },
        {
            id:103,
            name:"metro in dino"
        },
        {
            id:104,
            name:"rockey ki rani"
        }
    ]
  return (
    <div>
        <h1>MOVIES</h1>
        <ul>
            {
                movies.map((movie)=>{
                    return <li>
                        <Link to={`/playcontent/${movie.name}`}>{movie.name}</Link>
                    </li>
                })
            }
        </ul>
    </div>
  )
}
