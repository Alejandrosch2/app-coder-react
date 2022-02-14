
import './App.css';
import NavBar from './components/NavBar/NavBars/NavBar';
import { useState } from 'react';
import ItemCount from './components/itemCount/itemCount';



function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">

      <NavBar title="ecommerce" color="red" />
    
      <button onClick={() => setShow(!show)}>Mostrar</button>
      {show ? <ItemCount stock={5} initial={0} /> : null}
     
  
    </div>
  );
}


export default App;
