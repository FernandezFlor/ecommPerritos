import {CartContext} from "./CartContext"
import { useContext } from "react";

const ItemCart = ({product})=>{
    const ctx = useContext(CartContext);
    return(
            <div>
            <h4>Nombre: {product.name}</h4>
            <h5>Precio por unidad: ${product.price}</h5>
            <h5>Cantidad: {product.quantity}</h5>
            <img src={product.img} alt="asdsd"/>
            <h5>Total: ${(product.price*product.quantity)}</h5>
            <h4><button onClick={()=>ctx.removeItem(product.id)}>Eliminar</button></h4>
        
            </div>
    )
}

export default ItemCart;