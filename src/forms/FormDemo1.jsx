import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
    
    const{register,handleSubmit}=useForm()

    //register is use for register your input
    //handleSubmit is use for handling submit event and call back...
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGe</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
