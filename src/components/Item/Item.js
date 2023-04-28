import './Item.css';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import CartW from '../../pages/Cart/CartW';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Modal from '../Modal/Modal';

import useScreenSize from "../Screen/Screen";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({ product }) => {

        const { width} = useScreenSize();

        const mensaje = () => {
                <Modal />
                notify();
        };
        const navigate = useNavigate();

        const { addItem } = useContext(CartContext);


        const notify = () => toast("Producto agregado");

        const [count, setCount] = useState(product?.stock === 0 ? 0 : 1);


        const [estadoModal1, cambiarEstadoModal1] = useState(false);
        
        return   <div className="marciano">

                <div className="marciano-info">
                        <img className="marciano-pic" alt={product.name} src={`./img/${product.image}`} />
                </div>

                <div className="data-marciano">
                        <h2 className="titulo">{product.name}</h2>
                        <h3 className="precio">USD {product.price}</h3>
                        <p className="detalle">{product.description}</p>

                        <Link className="linkUno" to={`/item/${product.id}`}>
                                <button className="botonCompra"> VER DETALLE</button>
                        </Link>



                        <button className='boton-preC' onClick={() => addItem(product, count, mensaje(cambiarEstadoModal1(!estadoModal1),{notify}))}>AGREGAR</button>
                        


                       
                        
                        <Modal
                                estado={estadoModal1}
                                cambiarEstado={cambiarEstadoModal1}>
                                <CartW />
                        </Modal>
                        <ToastContainer />   





                </div>
        </div>

};

export default Item;