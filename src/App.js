import Nav from './components/Nav.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import ItemListContainer from './components/ItemListContainer.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart.js'
import {CartContext} from './components/CartContext.js'
import './App.css';



function App() {
  return (
    <>
    <CartContext.Provider value={['Coca Cola','Cocucha']}>
      <Router>
        <Nav />
        
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={"Hola Mundo"}/>}/>
          <Route path='category/:categoria' element={<ItemListContainer greeting={"Hola mundo"}/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path ='item/:id/:cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </CartContext.Provider>
    </>
  );
}

export default App;
