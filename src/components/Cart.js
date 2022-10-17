import { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext.js'
import { serverTimestamp,doc, setDoc, collection} from 'firebase/firestore';
import {db} from '../utils/firebaseConfig'
import swal from 'sweetalert'
import ItemCart from "./ItemCart";

const Cart = () =>{
  const ctx=useContext(CartContext);
  const [totalCost, setTotalCost]=useState(0)
  const [emptyCart, setEmptyCart]=useState(true)
  useEffect(()=>{
    setTotalCost(ctx.total)
    setEmptyCart(ctx.totalProducts()==0)
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
    ctx.clear();
    swal({
      title: "Compra finalizada!",
      text: "Tu orden de compra es: "+newOrderRef.id,
      icon: "success"
    });
  }
   
  return(
      <>
          <h1>Carrito</h1>
          <Link to='/'><button>Seguir comprando</button></Link>
          <button onClick={ctx.clear}>Vaciar carrito</button>
          <div>
            {
              emptyCart?
              <>
                  <h2>Carrito vacío</h2>      
              </>
              :ctx.cartList.map(item=> <ItemCart product={item} key={item.id}/>)
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