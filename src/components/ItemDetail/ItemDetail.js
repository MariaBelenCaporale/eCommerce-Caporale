import './ItemDetail.css'
import ItemCount from "../../components/ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const mensaje = () => {
    toast.success('Experiencia agregada!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        background: "red",
    });
};


const ItemDetail = ({ detail }) => {

    const navigate = useNavigate();

    const { addItem } = useContext(CartContext);

    const [count, setCount] = useState(detail?.stock === 0 ? 0 : 1);


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
                        <h4 className='usd'>USD {detail.price}</h4>

                        <ItemCount count={count} setCount={setCount} />

                        <div className='botonesPreCompra'>
                            <button className='boton-pre' disabled={count > detail.stock ? true : false} onClick={() => addItem(detail, count, mensaje())}>AGREGAR</button>
                            <ToastContainer />
                            <button className='boton-pre ver' onClick={() => navigate('/cart')}>VER CARRITO</button>
                        </div>
                    </div>
                </div>;
            </div>
        </section>

    )
};



export default ItemDetail;






