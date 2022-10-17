import React from "react";
import {Link} from 'react-router-dom'
const Item=({product})=>{
    return(
        <>
        <div>{product.name}</div>
        <div>Precio: ${product.price}</div>
        <img src={product.img} alt="asdsd"/>
        <br></br>
        <Link to={`/item/${product.id}`}><button>Ver más</button></Link>  
        </>
    )
}
export default Item;
