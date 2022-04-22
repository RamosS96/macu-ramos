import React, {useEffect, useState} from 'react';
import ButtonAddCart from '../Buttons/ButtonAddCart';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function ShopCart({producto, stock, src}) {
  let [itemCount, setCount] = useState(0);

  function useAddItem (){
    
  
  setTimeout(()=> 
  {if (itemCount< stock && itemCount> 0){
    MySwal.fire({
      title: 'Agregado Correctamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  } else if (itemCount == 0){
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
  }},
  2000)
}

  return (
    <div className='shop-card'>
        <h4>{producto}</h4>
        <img className='card-img' src={src} alt="Item Image"/>
        <div className='card-btns'>
          <button onClick={()=>setCount((itemCount>0 ? itemCount-1 : itemCount=0))}> - </button>
          <span>{itemCount}</span>
          <button onClick={()=>setCount((itemCount<stock ? itemCount+1 : itemCount=itemCount))} > + </button>
        <button onClick={useAddItem}>Agregar al Carrito</button>
        </div>
    </div>
  );
}


export default ShopCart;
