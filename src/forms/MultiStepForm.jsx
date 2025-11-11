import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

export const MultiStepForm = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [step, setstep] = useState(1);
  const nextStep = () => setstep(step + 1);
  const prevStep = () => setstep(step - 1);

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>MULTISTEP FORM</h1>
      <div
        style={{
          width: "300px",
          margin: "50px auto",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit(submitHandler)}>
          {step == 1 && (
            <>
              <label>Name</label>
              <input type="text" {...register("name")}></input>
              <br></br>
              <label>Email:</label>
              <input type="text" {...register("email")}></input>
              <br></br>
              <button onClick={nextStep}>Next</button>
            </>
          )}

          {step == 2 && (
            <>
              <label>Age</label>
              <input type="text" {...register("age")}></input>
              <br></br>
              <label>Password</label>
              <input type="text" {...register("password")}></input>
              <br></br>
              <button onClick={prevStep}>Prev</button>
              <button onClick={nextStep}>Next</button>
            </>
          )}
          {step == 3 && (
            <>
              <label>Exp</label>
              <input type="text" {...register("exp")}></input>
              <br></br>
              <label>Education</label>
              <input type="text" {...register("education")}></input>
              <button onClick={prevStep}>Prev</button>

              <input type="submit"></input>
            </>
          )}
        </form>
        <pre style={{marginTop:"20px",background:"#f4f4f4",padding:"10px"}}>
          {
            JSON.stringify(getValues(),null,2)
          }
        </pre>
      </div>
    </div>
  );
};
