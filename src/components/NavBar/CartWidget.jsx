import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CartContext from '../../resources/cart-context';
import { useContext } from 'react';

function CartWidget(props) {
    const CartCTX = useContext(CartContext)

    return (
        <div className='cart-container'>
            
            <Link to={'/cart'}><FontAwesomeIcon icon={faCartShopping} className="cart-icon"/></Link>
            <span className='cart-span'>{CartCTX.cartProducts.length}</span>
        </div>
    );
}

export default CartWidget;