import { useContext } from 'react';
import {CartContext} from './CartContext.js'
const Cart = () =>{
  const ctx=useContext(CartContext);
 
  return(
      <>
          <h1>Carrito</h1>
          {
            ctx.map(item=><li>{item}</li>)
          }
      </>
  )
}

export default Cart;