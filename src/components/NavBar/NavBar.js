
import CartWidget from '../CardWidget/CartWidget';
import './NavBar.css';
import logo from '../Assets/logo-02.png';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='container-logo'>
                <img src = {logo} className = "logo" />
            </div>

            <div>
                <ul className='lista'>
                    <li>
                        <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        to="/"> 
                            INICIO
                        </NavLink>
                    </li>

                    <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        to="/category/EXCURSIONES">
                            EXCURSIONES
                        </NavLink>
                    </li>

                    <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        to="/nosotros">
                            NOSOTR@S
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>
                <CartWidget />
            </div>
        </div>
    )
}


export default NavBar
