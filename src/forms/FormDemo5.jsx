import React from 'react'
import { get, useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({mode:"all"})
    console.log("errors....",errors)//{}
    var inqCodeList = ["royal","dhiraj","mihir","jagrut"]
    const submitHandler =(data)=>{
        alert("form subbmited...")
        console.log(data)
    }
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"min age is 18*"
            },
            max:{
                value:60,
                message:"max age is 60*"
            }
        },
        inqCodeValidator:{
            required:{
                value:true,
                message:"inq code is required*"
            },
            validate:(params)=>{
                //return params == "royal" || "inq code must be royal"
                return inqCodeList.includes(params) || "invalid inq code..."
                //return inqCodeList.includes(params) || in
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>INQ CODE</label>
                <input type='text' {...register("inqCode",validationSchema.inqCodeValidator)}></input>
                {errors.inqCode?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}





// const getData = ()=>{

//     const register=()=>{

//         return ""
//     }
//     const handleSUbmit=()=>{

//     }
//     const data="";

//     return {register,handleSUbmit,data}


// }

// const {register,handleSUbmit,data} =getData()