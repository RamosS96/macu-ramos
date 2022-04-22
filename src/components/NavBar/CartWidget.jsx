import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


function CartWidget(props) {
    return (
        <div className='cart-container'>
            
            <a href='/'><FontAwesomeIcon icon={faCartShopping} className="cart-icon"/></a>
            <span className='cart-span'>0</span>
        </div>
    );
}

export default CartWidget;