import {ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const CartWidget = () => {
    const test=useContext(CartContext);
    return( 
    <Badge badgeContent={test.qtyProd()} color="secondary">
        <ShoppingCartOutlined/>
    </Badge>

    )
}

export default CartWidget;