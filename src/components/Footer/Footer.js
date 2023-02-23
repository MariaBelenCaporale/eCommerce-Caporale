import React from "react";
import './Footer.css';
import logo from '../Assets/logo-02.png';
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="container-list">
                 <NavLink to={"/"}>
                    <img src = {logo} className = "logo-footer" />
                </NavLink>
                    <ul className="list">
                        <li>
                            María Belén Caporale
                        </li>
                        <li>
                        <Link className="enlaces-cuentas" to={"https://github.com/MariaBelenCaporale"}>GitHub</Link>
                        </li>
                        <li>
                        <Link className="enlaces-cuentas" to={"https://www.linkedin.com/in/mariabelencaporale/"}>LinkedIn</Link>
                        </li>
                    </ul>

                </div>
    
            </div>
        </div>

    )
};

export default Footer;
