import './Item.css';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import CartW from '../../pages/Cart/CartW';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Modal from '../Modal/Modal';

const Item = ({ product }) => {

        const mensaje = () => {

                <Modal />

        };
        const navigate = useNavigate();

        const { addItem } = useContext(CartContext);


        

        const [count, setCount] = useState(product?.stock === 0 ? 0 : 1);


        const [estadoModal1, cambiarEstadoModal1] = useState(false);
        return <div className="marciano">

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



                        <button className='boton-preC' onClick={() => addItem(product, count, mensaje(cambiarEstadoModal1(!estadoModal1)))}>AGREGAR</button>


                        <Modal
                                estado={estadoModal1}
                                cambiarEstado={cambiarEstadoModal1}>
                                <CartW />
                        </Modal>





                </div>
        </div>

};

export default Item;