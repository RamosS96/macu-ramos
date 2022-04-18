import React from 'react';

function NavBar(props) {
    return (
        <div>
            <ul>
                <li><h2>Macu Creaciones</h2></li>
                <div>
                <li><a href='index.html'>Productos</a></li>
                <li><a href='index.html'>Contacto</a></li>
                <li><a href='index.html'>Ayuda</a></li>
                </div>
            </ul>
        </div>
    );
}

export default NavBar;