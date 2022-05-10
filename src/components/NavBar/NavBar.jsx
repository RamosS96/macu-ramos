import React from 'react';
import imgLogo from '../../img/macu-logo.png'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><img className='nav-img' src={imgLogo} alt='logo'/></li>
                <div>
                <li><Link to={'/products'}><a href='index.html'>Productos</a></Link></li>
                <li><Link to={'/contact'}><a href='index.html'>Contacto</a></Link></li>
                <li><Link to={'/help'}><a href='index.html'>Ayuda</a></Link></li>
                <Link to={'/cart'}><CartWidget/></Link>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;