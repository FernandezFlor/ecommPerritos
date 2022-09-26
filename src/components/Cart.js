import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {CartContext} from './CartContext.js'
const Cart = () =>{
  const ctx=useContext(CartContext);
 
  return(
      <>
          <h1>Carrito</h1>
          <Link to='/'><Button>Seguir comprando</Button></Link>
          <button onClick={ctx.clear}>Vaciar carrito</button>
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
      </>
  )
}

export default Cart;