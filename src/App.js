
import './App.css';
import NavBar from './components/NavBar/NavBars/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button/Button';



function App() {

  return (
    <div className="App">

      <NavBar title="ecommerce" color="red" />
    

     <ItemListContainer/>
  
    </div>
  );
}


export default App;
