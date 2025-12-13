import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const UpdateUser = () => {
    //id ---> GET
  //url ->id -->get
  const id = useParams().id;

  //redirect
  const navigate = useNavigate()

  //const { register, handleSubmit } = useForm({defaultValues:{name:"test",age:0}});
  const { register, handleSubmit } = useForm({defaultValues:async()=>{
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`); //-->{}
    console.log(res.data.data)
    return res.data.data //all
  }});

  const submitHandler = async(data)=>{
    //console.log(data)
    //put api : update tablename set ? where id =?
    //remove id from data
    delete data._id
    const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
    console.log(res.data) //api response..
    console.log(res.status)
    if(res.status==200){
        //toast...
        toast.success("user updated..")
        //navigate("/url") --->app.js -->routes..
        navigate("/apidemo1")
    }

  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>UPDATE USER</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>EMAIL</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
