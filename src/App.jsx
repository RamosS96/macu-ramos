import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/Cards/ShopCart.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer product1="Pantalon" product2="Remera" title="Productos destacados"/>
        
        <ItemListContainer product1="Calza" product2="Short" title="Ofertas del mes"/>
    </div>
  );
}

export default App;
