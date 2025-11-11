import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const FormDemo7 = () => {
const{register,handleSubmit,control}=useForm({ defaultValues: {medicin:[{name:"",dosage:0,frequency:0}]}})

//fields -->[{"name":"",dosage:0,frequency:0}]==default value..
const{fields,append,remove}=useFieldArray({name:"medicin",control})

console.log(fields)
const submitHandler = (data)=>{
    console.log(data)
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 7</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
           {
            fields.map((f,index)=>{
                return<div>
                    <div>
                        <label>NAME</label>
                        <input type='text' {...register(`medicin.${index}.name`)}></input>
                    </div>
                    <div>
                        <label>Dosage</label>
                        <input type='text' {...register(`medicin.${index}.dosage`)}></input>
                    </div>
                    <div>
                        <label>Frequency</label>
                        <input type='text' {...register(`medicin.${index}.frequency`)}></input>
                    </div>
                </div>
            })
           }
           <div>
            <input type='submit'></input>
           </div>
        </form>
        <button onClick={()=>{append([{name:"",dosage:0,frequency:0}])}}>APPEND</button>
    </div>
  )
}
