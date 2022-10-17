import Item from "./Item";

const ItemList=({listProducts})=>{
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