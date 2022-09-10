import logo from '../img/logo.png';
import Cart from './CartWidget.js';

const Nav = () => {
    return(
        <div className="App">
        <nav className="menuNav" id="nav">
            <a href="index.html">
                <img src={logo} alt="Logo de perritos" class="logo"/>
            </a>
            <ul className="crearLista">
                <li className="lista">
                    <a href="#">Galeria</a>
                </li>
                <li className="lista">
                    <a href="#">Sobre nosotros</a>
                </li>
                <li className="lista">
                    <a href="#">Reseñas</a>
                </li>
                <li className="lista">
                    <a href="#">Contacto</a>
                </li>
            </ul>
            <Cart/>
        </nav>
    </div>
    );
}

export default Nav;