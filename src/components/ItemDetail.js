import React, {useState} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount]=useState(0);
    
    const onAdd=(qty)=>{
        alert("La cantidad seleccionada es de:"+qty);
        setItemCount(qty);
        
    }


    return(
        <>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <img src={item.img} alt="asdsd"/>
        <div>{item.details}</div>       
        {
            itemCount===0
            ?<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
            : <Link to='/cart'>
                <button>Checkout</button>
              </Link>
        }
        </>
    )
}
export default ItemDetail;