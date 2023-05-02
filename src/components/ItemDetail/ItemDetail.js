import './ItemDetail.css'
import ItemCount from "../../components/ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Modal/Modal';
import CartW from '../../pages/Cart/CartW';

import useScreenSize from "../Screen/Screen";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const mensaje = () => {
    // toast.success('Experiencia agregada!', {
    //     position: "top-right",
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     background: "red",
    // });
    <Modal />
};


const ItemDetail = ({ detail }) => {
    
    const { width} = useScreenSize();

        const mensaje = () => {
                <Modal />
                notify();
        };

    const navigate = useNavigate();

    const { addItem } = useContext(CartContext);

    const notify = () => toast("Producto agregado",{
        autoClose: 2000,
})

    const [count, setCount] = useState(detail?.stock === 0 ? 0 : 1);

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    return (
        <section className='detalles-section'>
            <div className='pa'>
                <div className='padreDetail'>

                    <div className='detail'>
                        <img src={`/img/${detail.image}`} alt={detail.name} className='imgDetail' />
                    </div>

                    <div className='detalles'>
                        
                        <h2 className='detail-name'>{detail.name}</h2>
                        <h5 className='detail-duration'>En stock: {detail.stock} | Duración de la actividad: {detail.duration}</h5>
                        <h4 className='descriptionDetail'>Descripción</h4>
                        <p className='textoDetalles'>{detail.detail}</p>
                        <p className='descript'>{detail.description}</p>
                        <h4 className='usd'>Precio: USD {detail.price}</h4>

                            <ItemCount count={count} setCount={setCount} />

                            <div className='botonesPreCompra'>

                                <button className='boton-pre' onClick={() =>  addItem(detail, count, mensaje(cambiarEstadoModal1(!estadoModal1),{notify}))}>AGREGAR</button>
                            <ToastContainer />
                                
                                <Modal
                                    estado={estadoModal1}
                                    cambiarEstado={cambiarEstadoModal1}>
                                    <CartW />
                                </Modal>

                            </div>
                    </div>
                </div>;
            </div>
        </section>

    )
};

export default ItemDetail;






