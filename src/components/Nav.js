import logo from '../img/logo.png';
import Cart from './CartWidget.js';
import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <div>
        <nav className="menuNav" id="nav">
            <Link to="/">
                <img src={logo} alt="Logo de perritos" class="logo"/>
            </Link>
            
            <ul className="crearLista">
                <li className="lista">
                    <Link to='/'>Galeria</Link>
                </li>
                <li className="lista">
                    <Link to='/category/1'>Talles grandes</Link>
                </li>
                <li className="lista">
                    <Link to='/category/2'>Talles chicos</Link>
                </li>
            </ul>
            <Link to='cart'><Cart/></Link>
        </nav>
    </div>
    );
}

export default Nav;
