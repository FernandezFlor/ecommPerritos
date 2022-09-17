import Nav from './components/Nav.js'
import Item from './components/ItemDetailContainer.js'
import ItemCount from './components/ItemCount.js'

import './App.css';



function App() {
  return (
    <>
    <Nav />
    
    <Item />
    <ItemCount initial={1} stock={5}/>
    
    </>
  );
}

export default App;
