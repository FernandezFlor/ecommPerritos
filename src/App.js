import Nav from './components/Nav.js'
import Items from './components/ItemListContainer.js'
import ItemCount from './components/ItemCount.js'

import './App.css';



function App() {
  return (
    <>
    <Nav />
    
    <Items />
    <ItemCount initial={1} stock={5}/>
    
    </>
  );
}

export default App;
