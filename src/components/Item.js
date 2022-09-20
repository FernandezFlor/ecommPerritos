import React from "react";
import {Link} from 'react-router-dom'
const Item=({product})=>{
    return(
        <>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <img src={product.img} alt="asdsd"/>
        <div>{product.details}</div>  
        <Link to={`/item/${product.id}`}><button>Detalle</button></Link>  
        </>
    )
}
export default Item;
