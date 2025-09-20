import React from 'react'

export const MapDemo4 = () => {
    var users = [
    { id: 1, name: "ram", age: 23 ,salary:23000,gender:"male"},
    { id: 2, name: "shyama", age: 24 ,salary:34000,gender:"female"},
    { id: 3, name: "ajay", age: 22,salary:40000,gender:"male" },
    { id: 3, name: "jaya", age: 22,salary:51000,gender:"female" },
  ];
  return (
    <div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return<tr style={{backgroundColor:user.gender=="female" && "pink"}}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td style={{color:user.age<23 && "red"}}>{user.age}</td>
                            <td style={{backgroundColor:user.salary>40000 && "lightblue"}}>{user.salary}</td>
                            <td>{user.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
