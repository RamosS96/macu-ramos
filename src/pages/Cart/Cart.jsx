import React, { useContext, useState } from 'react';
import CartCard from '../../components/Cards/CartCard';
import CartContext from '../../resources/cart-context';


const Cart = () => {
    const CartCtx = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);



    console.log(CartCtx.cartProducts);

    return (
        <div>
            <h2>Total de productos ({CartCtx.cartProducts.length})</h2>
            {CartCtx.cartProducts.map(item => <CartCard props={item}/> )}
        </div>
    );
};

export default Cart;