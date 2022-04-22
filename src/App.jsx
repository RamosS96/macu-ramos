import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/Cards/ShopCart.css';



function App() {
  return (
    <div className="App">
        <NavBar/>
        
        <ItemListContainer title="Productos destacados"/>
        
        <ItemListContainer title="Ofertas del mes"/>
    </div>
  );
}

export default App;
