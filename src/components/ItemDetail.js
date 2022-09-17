import React from 'react'


const ItemDetail = ({dato}) => {

    console.log(dato);
    return(
        <>
        <div>{dato.name}</div>
        <div>{dato.price}</div>
        <img src={dato.img} alt="asdsd"/>
        <div>{dato.details}</div>       
        </>
    )
}
export default ItemDetail;