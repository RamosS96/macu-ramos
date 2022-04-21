import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


function CartWidget(props) {
    return (
        <div>
            
            <a href='/'><FontAwesomeIcon icon={faCartShopping} className="cart-icon"/></a>
            <span className='cart-span'>Number</span>
        </div>
    );
}

export default CartWidget;