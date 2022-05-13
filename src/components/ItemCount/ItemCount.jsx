import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);
    const btnAddToCart = document.getElementById('addToCart');
    const btnShowCart = document.getElementById('showCart');


    // btnAddToCart.addEventListener("click", ()=> {
    //     btnAddToCart.classList = 'hide';
    //     btnShowCart.classList = '';
    // })

    function handleAddButton() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleRemoveButton() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='item-count-container'>
            <div>
                <button onClick={() => handleRemoveButton()}>-</button>
                <input readOnly value={count} />
                <button onClick={() => handleAddButton()}>+</button>
            </div>
            <Link to={'/cart'}><button className='hide' id='showCart'>Ver ({count}) elementos en el carrito carrito</button></Link>
            <button id='addToCart' onClick={() => {
                (count <= stock) && onAdd(count);
                btnAddToCart.classList = 'hide';
                btnShowCart.classList = '';
            }}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount