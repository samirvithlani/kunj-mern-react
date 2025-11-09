import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {
    const {register,handleSubmit,formState:{errors},watch} = useForm({mode:"onChange"})

    const password = watch("password","")
    const confirmPassword = watch("confirmPassword","")

    const matchPassword = password === confirmPassword && password!==""

    const validationSchema={
        passwordValidator:{
            required:{
                value:true,
                message:"password is required *"
            }
        },
        confirmPasswordValidator:{
            required:{
                value:true,
                message:"confirm password is required *"
            },
            validate:(params)=>{
                return params == password || "Confirmpassword does not matched.."
            }
        }
    }
    const submitHandler = (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 6</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>PASSWORD</label>
                <input type='text' {...register("password",validationSchema.passwordValidator)}></input>
                {
                    errors.password?.message
                }
            </div>
            <div>
                <label>CONFIRM PASSWORD</label>
                <input type='text' {...register("confirmPassword",validationSchema.confirmPasswordValidator)}></input>
                {errors.confirmPassword?.message}
            </div>
            {
                password && confirmPassword && <p style={{color:matchPassword?"green":"red"}}>
                    {
                        matchPassword && "password matched"
                    }
                </p>
            }
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
