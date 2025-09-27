import React from "react";

export const EmployeeList = (props) => {
  console.log("employeeList props", props);
  return (
    <div>
      <h1>EMPLOYEE LIST</h1>
      {/* <div className='card' style={{width:"30rem"}}>
            <h1>Name ={props.emp.name}</h1>
            <h3>Age= {props.emp.age}</h3>
        </div> */}
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            props.employees.map((emp)=>{
              return<tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>
                  <button onClick={()=>{props.findEmployee(emp.id)}} className="btn btn-info">INFO</button>
                  <button style={{marginLeft:"10px"}} onClick={()=>{props.deleteEmployee(emp.id)}} className="btn btn-danger">DELETE</button>
                </td>
              </tr>
            })
          }
        </tbody>

      </table>
    </div>
  );
};
