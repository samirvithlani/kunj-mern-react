import React, { useState } from 'react'
import { EmployeeList } from './EmployeeList'

export const Employees = (props) => {
  console.log("employees props",props) //{title:""}
  
  var employee = {
    id:1,
    name:"ram",
    age:22
  }

  const findEmployee = (id)=>{
    //alert(id)
    const foundEmployee = employees.find((emp)=>emp.id == id)
    alert(`employee name =${foundEmployee.name}\n employee age =${foundEmployee.age}`)

  }

  const deleteEmployee = (id)=>{
      // var x = employees.filter((emp)=>emp.id!==id)
      // console.log(x)
      // setemployees(x)

      setemployees(employees.filter((emp)=>emp.id!==id))
  }

  const [employees, setemployees] = useState([
    {
      id:1,
      name:"ram",
      age:23
    },
    {
      id:2,
      name:"shyam",
      age:25
    },
    {
      id:3,
      name:"amit",
      age:24
    }

  ])

  return (
    <div style={{textAlign:"center"}}>
        <h1>EMPLOYEE COMPONENT</h1>
        <EmployeeList emp={employee} title ={props.title} employees = {employees} 
        findEmployee = {findEmployee} deleteEmployee = {deleteEmployee}></EmployeeList>
    </div>
  )
}
