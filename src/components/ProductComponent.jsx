import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export const ProductComponent = () => {

  const [products, setproducts] = useState([
    { id: 1, name: "iphone", price: 2000 },
    { id: 2, name: "charger", price: 200 },
  ]);

  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: "center" }}>
      <h1>PRODUCT COMPONENT</h1>
      <div className="row">
        <div className="col">
            {
                products.map((pr)=>{
                    return<div className="card" style={{width:"60rem"}}>
                        <h1>NAME : {pr.name}</h1>
                        <h4>PRICE: {pr.price}</h4>
                        <button onClick={()=>{dispatch(addToCart(pr))}} className="btn btn-info">ADD TO CART</button>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};
