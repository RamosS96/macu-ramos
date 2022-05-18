import CartContext from '../../resources/cart-context'
import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetailMini({item}) {
    const [quantityProducts, setQuantityToAdd] = useState(null);
    const CartCtx = useContext(CartContext);

    function addHandler(quantityToAdd){
        setQuantityToAdd(quantityToAdd);
    };

  

    return (
        <>
         <div className='img-detailContainer'>
            <img className='img-itemDetail' src={item?.url} alt='img detail'/>
         </div>
         <div className='itemDetail-container'>
            <h4>{item?.title}</h4>
            <p>{item?.category}</p>
            <span>{item?.price}</span>
            
            <ItemCount initial={0} stock={item?.stock} onAdd={addHandler}></ItemCount>          
            <button onClick={()=> {console.log(CartCtx.cartProducts)}}>Ver Carrito</button>
            <button onClick={()=> {CartCtx.removeProductCart(item);console.log(CartCtx.cartProducts)}}>Remover de Carrito</button>
            <button onClick={()=> {CartCtx.clearCart();console.log(CartCtx.cartProducts)}}>Limpiar Carrito</button>
            <button onClick={()=> {CartCtx.addProductCart(item);console.log(CartCtx.cartProducts)}}>Agregar al carrito</button>
            
         </div>     
        </>
    );
}

export default ItemDetailMini;