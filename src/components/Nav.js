import logo from '../img/logo.png';
import Cart from './CartWidget.js';
import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <div className="App">
        <nav className="menuNav" id="nav">
            <Link to="/">
                <img src={logo} alt="Logo de perritos" class="logo"/>
            </Link>
            
            <ul className="crearLista">
                <li className="lista">
                    <Link to='/'>Galeria</Link>
                </li>
                <li className="lista">
                    <Link to='/category/1'>Categoria 1</Link>
                </li>
                <li className="lista">
                    <Link to='/category/2'>Categoria 2</Link>
                </li>
                <li className="lista">
                    <Link to='/'>Contacto</Link>
                </li>
            </ul>
            <Cart/>
        </nav>
    </div>
    );
}

export default Nav;