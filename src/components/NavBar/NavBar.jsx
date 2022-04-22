import React from 'react';
import imgLogo from '../../img/macu-logo.png'
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><img className='nav-img' src={imgLogo} alt='logo'/></li>
                <div>
                <li><a href='index.html'>Productos</a></li>
                <li><a href='index.html'>Contacto</a></li>
                <li><a href='index.html'>Ayuda</a></li>
                <CartWidget/>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;