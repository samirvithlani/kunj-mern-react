import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    const validationSchema  ={
        contactValidator:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"invalid contact"
            }
        },
        refcodeValidator:{
            required:{
                value:true,
                message:"ref code is required *"
            },
            validate:(params)=>{
                return params =="royal" || "ref code must be royal only"
            }
        }
    }
    const submitHandler = (data)=>{
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Contact</label>
            <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
            {errors.contact?.message}
        </div>
        <div>
            <label>Ref COde</label>
            <input type='text' {...register("refcode",validationSchema.refcodeValidator)}></input>
            {errors.refcode?.message}
        </div>
        <div>
            <input type='submit'></input>
        </div>
        </form>
    </div>
  )
}
