import React from "react";

const Item=({product})=>{
    return(
        <>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <img src={product.img} alt="asdsd"/>
        <div>{product.details}</div>       
        </>
    )
}
export default Item;
