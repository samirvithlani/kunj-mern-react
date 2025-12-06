import axios from "axios";
import React from "react";

export const ApiDemo3 = () => {
  //frontend data collect --> backend send..
  //be --> post api -->fe post integrate..

  const addUser = async () => {
    const data = {
      name: "ram",
      email: "ram2@gmail.com",
      password: "ram123",
      age: 25,
      isActive: false,
    };

    try {
      const res = await axios.post(`https://node5.onrender.com/user/user`,data);
      console.log(res);
      if (res.status == 200) {
        alert("user added..");
      }
    } catch (err) {
        alert("error while adding user...")
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 3</h1>
      <button
        onClick={() => {
          addUser();
        }}
      >
        ADD
      </button>
    </div>
  );
};
