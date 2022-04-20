import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer title="Productos destacados"/>
    </div>
  );
}

export default App;
