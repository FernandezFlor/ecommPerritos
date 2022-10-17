import React, {useState} from 'react'
import Contador from './ItemCount'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import {CartContext} from './CartContext.js'



const ItemDetail = ({product}) =>{
    const ctx=useContext(CartContext);
    const [itemCount, setItemCount] = useState(0);
    
    const onAdd = (stock) => {
    alert("seleccionaste " + stock  + " "+product.name+" teniendo que pagar un total de: $"+stock*product.price);
    setItemCount(stock);
    ctx.addItem(product,stock)
}

    return(
        <>
        <h1>{product.name}</h1>
        <h2>Precio: ${product.price}</h2>
        <img src={product.img} alt="asdsd"/>
        <h3>Stock disponible:{product.stock}</h3>
        <h4>{product.details}</h4>  
        {
            itemCount === 0
            ?<Contador stock={product.stock} initial={itemCount} onAdd={onAdd}/>
            :<Link to='cart'><button>Checkout</button></Link>
        }
       
        </>
    )
}

export default ItemDetail;