
import Item from "./Item";

const ItemList=({listProducts})=>{
    console.log(listProducts);
    return(
        <>
        {listProducts.map((product)=>(
            <Item product={product} key={product.id}/>
        ))
        
        }
        </>
    )
}

export default ItemList;