import Nav from './components/Nav.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import ItemListContainer from './components/ItemListContainer.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart.js'
import CartContextProvider from './components/CartContext.js'
import './App.css';



function App() {
  return (
    <>
    <CartContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route path='category/:categoria' element={<ItemListContainer/>}/>
          <Route path='item/:id' element={<ItemDetailContainer/>}/>
          <Route path ='item/:id/:cart' element={<Cart/>}/>
          <Route path ='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
