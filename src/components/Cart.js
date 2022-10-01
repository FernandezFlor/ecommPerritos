import { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {CartContext} from './CartContext.js'
import { serverTimestamp,doc, setDoc, collection} from 'firebase/firestore';
import {db} from '../utils/firebaseConfig'
import { async } from '@firebase/util';
const Cart = () =>{
  const ctx=useContext(CartContext);
  const [totalCost, setTotalCost]=useState(0)
  const [emptyCart, setEmptyCart]=useState(true)
  useEffect(()=>{
    setTotalCost(ctx.total)
    setEmptyCart(ctx.totalProducts==0)
  }, [ctx])
  const createOrder=async()=>{
    const dataForDB=ctx.cartList.map(product=>({
      id:product.id,
      title: product.name,
      price: product.price,
      quantity:product.quantity
    }))
    let order={
      buyer:{
        name: "Leo Messi",
        mail: "aloha@asd",
        number: 123456
      },
      items: dataForDB,
      date: serverTimestamp(),
      total: totalCost
    }
    const newOrderRef=doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    alert("Tu orden de compra es: "+newOrderRef.id)
  }
  

  return(
      <>
          <h1>Carrito</h1>
          <Link to='/'><Button>Seguir comprando</Button></Link>
          <Button onClick={ctx.clear}>Vaciar carrito</Button>
            {     
  
                ctx.cartList.map(product => 
                  <div className="container">
                    <h4>Nombre: {product.name}</h4>
                    <h5>Precio por unidad: ${product.price}</h5>
                    <h5>Cantidad: {product.quantity}</h5>
                    <h5>Total: ${(product.price*product.quantity)}</h5>
                    <h4><Button onClick={()=>ctx.removeItem(product.id)}>Eliminar</Button></h4>
                </div>)
            }
          <div>
            {
              emptyCart?
              <></>
              :<h2>Carrito vacio </h2>
            }
          </div>
          <div>
            <h3>Resumen de la compra</h3>
            <h5>Total ${totalCost}</h5>
            <button onClick={createOrder}>Checkout</button>
          </div>
            
      </>
  )
}

export default Cart;