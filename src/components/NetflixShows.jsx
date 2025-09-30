import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center",minHeight:"300px",border:"1px solid pink",margin:"10px"}}>
        <h1>SHOWS</h1>
        <ul>
            <li>
                <Link to="/playcontent/moneyheist">Money Heist</Link>
            </li>
            <li>
                <Link to="/playcontent/squidgame">Squid Game</Link>
            </li>
            <li>
                <Link to="/playcontent/breakingbad">Breaking Bad</Link>
            </li>
        </ul>
    </div>
  )
}
