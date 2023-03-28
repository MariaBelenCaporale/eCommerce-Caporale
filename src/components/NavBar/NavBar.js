
import CartWidget from '../CardWidget/CartWidget';
import './NavBar.css';
import logo from '../Assets/logo-02.png';
import { Link, NavLink } from 'react-router-dom';
import BurguerButton from './BurguerButton';
import React, { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

const NavBar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {

        setClicked(!clicked)

    }
    return (
        <div className='navbar'>
            <NavLink className={"container-logo"} to="/">
                <img src={logo} className="logo" />
            </NavLink>


            <div>
                <ul className={`lista ${clicked ? 'active' : ''}`}>
                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/">
                            INICIO
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/Experiencias">
                            EXPERIENCIAS
                        </NavLink>
                    </li>

                    <li>
                        <NavLink onClick={handleClick}
                            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                            to="/nosotros">
                            NOSOTR@S
                        </NavLink>
                    </li>

                    <div className='carro' onClick={handleClick}>
                        <CartWidget />
                    </div>
                </ul>
            </div>
            {/* 
            <div className='carro'>
                <CartWidget />
            </div> */}

            <div className='burguer'>
                <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>


            <div className={`initial ${clicked ? ' active' : ''}`}> </div>



        </div>
    )
};


export default NavBar;
