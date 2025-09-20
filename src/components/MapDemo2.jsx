import React from "react";

export const MapDemo2 = () => {
  var users = [
    { id: 1, name: "ram", age: 23 },
    { id: 2, name: "shyam", age: 24 },
    { id: 3, name: "ajay", age: 22 },
  ];
  return <div>
    {users[0].name}
    {
        users.map((user)=>{
            return (<li>
                {user.id} - {user.name} - {user.age}
            </li>)
        })
    }
  </div>;
};
