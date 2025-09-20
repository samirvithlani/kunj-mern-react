import React from "react";

export const Content = () => {
  //javascript
  var name = "India";
  var year = 1945;
  var isSuperPower = false;

  //json object
  var country = {
    name: "China",
    year: 2019,
    kand: "covid",
  };

  const cardStyle = {
    backgroundColor:"white",
    textAlign:"center",borderRadius:"2%",border:"1px solid black",color:"black"
    
  }
  return (
    <div style={cardStyle}>
    {/* // <div style={{textAlign:"center",borderRadius:"10%",border:"1px solid black",color:"black"}}> */}
      <h1>At a time we can return only 1 tag</h1>
      <h2>Every tag must have closing tag</h2>
      <h3>Whatever written inside return statment only display to browser</h3>

      <h1>HELLO</h1>
      {name}
      <h1 style={{color:"orange"}}>name = {name}</h1>

      <h2 style={{color:year>2000 ? "green":"yellow"}}>Year = {year}</h2>

      <h2>Superpower = {isSuperPower == true ? "Yes" : "No"}</h2>
      <h1>Namme = {country.name}</h1>
      <h2 style={{color:country.year>2015 ?"red":"black"}}>year = {country.year}</h2>
      <h2 style={{color:country.year>2015 && "red"}}>year = {country.year}</h2>
      <h3>Kand = {country.kand}</h3>
    </div>
  );
};
