import React, { useState } from 'react';


function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

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
            <button onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount