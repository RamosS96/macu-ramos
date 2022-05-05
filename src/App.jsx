import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/Cards/ShopCart.css';
import './components/ItemDetail/ItemDetail.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer title="Productos destacados"/>}/>
            <Route path='/category/:categoryID' element={<ItemListContainer title="Ofertas del mes"/>}/>
            <Route path='/item/:itemID' element={<ItemListContainer title="asd"/>}/>
        </Routes>
        
        
        
    </div>
  );
}

export default App;
