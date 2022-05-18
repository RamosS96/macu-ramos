import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import Cart from './pages/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/Cards/ShopCard.css';
import './components/ItemDetail/ItemDetailMini.css';

import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path='/cart' element={<Cart title={"Carrito"}/>}/>
            <Route path='/' element={<ItemListContainer title="Productos destacados"/>}/>
            <Route path='/category/:categoryID' element={<ItemListContainer title="Ofertas del mes"/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer title="asd"/>}/>
        </Routes>
        
        
        
    </div>
  );
}

export default App;
