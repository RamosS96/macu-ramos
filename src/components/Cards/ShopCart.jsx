import React, { useState } from 'react';
import ButtonAddCart from '../Buttons/ButtonAddCart';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link } from 'react-router-dom';

const MySwal = withReactContent(Swal)

function ShopCart({ producto, stock, src, all }) {
  let [itemCount, setCount] = useState(0);

  function useAddItem() {


    setTimeout(() => {
      if (itemCount < stock && itemCount > 0) {
        MySwal.fire({
          title: 'Agregado Correctamente',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      } else if (itemCount === 0) {
        MySwal.fire({
          title: 'Seleccione al menos un item',
          icon: 'info',
          confirmButtonText: 'Ok'
        })
      } else {
        MySwal.fire({
          title: 'Ha seleccionado todo el stock disponible!',
          icon: 'warning',
          confirmButtonText: 'Ok'
        })
      }
    },
      2000)
  };

  return (
    <div className='shop-card'>
      <h4>{producto}</h4>
      <img className='card-img' src={src} alt="Item" />
      <div className='card-btns'>
        <button onClick={() => setCount((itemCount > 0 ? itemCount - 1 : itemCount = 0))}> - </button>
        <span>{itemCount}</span>
        <button onClick={() => setCount((itemCount < stock ? itemCount + 1 : itemCount = itemCount))} > + </button>
        {<ButtonAddCart content={"Agregar al Carrito"} fn={useAddItem} />}
        {<Link to={`/item/${all.id}`} ><ButtonAddCart content={"Ver detalles"} fn={() => {
          MySwal.fire({
            title: `${all.name}`,
            html: <ItemDetail item={all} /> ,
            width: 400,
          })
        }} /></Link>}
      </div>
    </div>
  );
}


export default ShopCart;
