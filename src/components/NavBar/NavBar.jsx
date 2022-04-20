import React from 'react';
import imgLogo from '../../img/macu-logo.png'
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>
            <ul>
                <li><img src={imgLogo} alt='logo'/></li>
                <div>
                <li><a href='index.html'>Productos</a></li>
                <li><a href='index.html'>Contacto</a></li>
                <li><a href='index.html'>Ayuda</a></li>
                <CartWidget/>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;