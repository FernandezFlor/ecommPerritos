import Nav from './components/Nav.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import ItemListContainer from './components/ItemListContainer.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>
    <Router>
    <Nav />
    
    <Routes>
      <Route exact path='/' element={<ItemListContainer greeting={"Hola Mundo"}/>}/>
      <Route path='category/:categoria' element={<ItemListContainer greeting={"Hola mundo"}/>}/>
      <Route path='item/id' element={<ItemDetailContainer/>}/>
    </Routes>
    </Router>

    
    </>
  );
}

export default App;
