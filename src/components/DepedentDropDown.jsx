import React, { useState } from 'react'

export const DepedentDropDown = () => {
const [selectedCountry, setselectedCountry] = useState("")
const [selectedState, setselectedState] = useState("")
    var data =[
        {
            country:"india",
            states:["Gujarat","Maharashtra"]
        },
        {
            country:"USA",
            states:["WD","california"]
        }
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>DEPEDENT DROPDOWN</h1>
        <div>
            <label>COUNTRY</label>
            <select onChange={(event)=>{setselectedCountry(event.target.value)}}>
                {
                    data.map((d)=>{
                        return <option value={d.country}>{d.country}</option>
                    })
                }
            </select>
            {selectedCountry}
        </div>
        <div>
            <label>STATE</label>
            <select onChange={(event)=>{setselectedState(event.target.value)}}>
                {
                 data.find((d)=>d.country == selectedCountry)?.states.map((s)=>{
                    return <option value={s}>{s}</option>
                 })
                }
            </select>
            {selectedState}
        </div>
    </div>
  )
}
