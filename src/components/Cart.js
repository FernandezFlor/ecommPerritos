import { useContext } from 'react';
import {CartContext} from './CartContext.js'
const Cart = () =>{
  const ctx=useContext(CartContext);
 
  return(
      <>
          <h1>Carrito</h1>
          <button onClick={ctx.clear}>Borrar Todo</button>
            {       
                ctx.cartList.map(product => <li>{product.name}  {product.price}<button onClick={()=>ctx.removeItem(product.id)}>Borrar</button></li>)
            }
      </>
  )
}

export default Cart;