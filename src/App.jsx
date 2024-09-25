import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Nehuen organico"}/>
    </div>
  );
}

export default App;
