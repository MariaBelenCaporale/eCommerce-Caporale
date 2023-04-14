import './Cart.css';
import { Fragment, useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import ItemCart from './ItemCart';
import PaymentForms from '../Pago/PaymentForms';
import ItemCount from '../../components/ItemCount/ItemCount';






const Cart = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext);
    const [formValue, setFormValue] = useState({
        name: '',
        telefono: '',
        email: '',
    });
    const navigate = useNavigate();



    const createOrder = (event) => {
        event.preventDefault();
        const db = getFirestore();

        const querySnapshot = collection(db, 'orders');


        addDoc(querySnapshot, {
            buyer: {
                email: formValue.email,
                name: formValue.name,
                phone: formValue.telefono,
            },
            products: cart.map((product) => {
                return {
                    title: product.name,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity,
                }
                
            }),
            // total: total,
        })
            .then((response) => {
                console.log(response.id);
                alert(`Orden ${response.id} creada`);
                updateStocks(db);
            })
            .catch((error) => console.log(error))
    };

    const updateStocks = (db) => {

        cart.forEach((product) => {
            const querySnapshot = doc(db, 'products', product.id);

            updateDoc(querySnapshot, {
                stock: product.stock - product.quantity,
            })
                .then((res) => {
                    alert('stock actualizado');
                })
                .catch((error) => console.log(error));
        })
    };

    const handleInput = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };


    return (
        <div className='sosten'>
            <div className='textTar'>
                <h2 className='tituloFormCompletar'>Realizá tu compra</h2>
                <p className='boucher'>Una vez que haya realizado el pago, se le enviará un email con su boucher.</p>
            </div>

            <div className='contieneCart'>
                <div className='contieneForm'>
                    <div className='layout'>
                        <PaymentForms />
                    </div>
                </div>


                <div className='contieneCarte'>
                <div className='fijoTotal'>
                        <div className='totalDeCompraForm'>
                            {cart.length > 0 && (<h2 className='total2'>Total: USD {total} </h2>)}
                        </div>
                    </div>
                    <div className='contieneCartHijo'>
                    
                        {
                            cart.length === 0 && (
                                <h2 className='negativoProducts'>No hay productos en el carrito</h2>
                            )
                        }
                        {cart.map((product) => (
                            <div className='contieneTodito'>
                                <div className='productCart' key={product.name}>
                                    <ItemCart product={product} />
                                    <button className='borrarProductsW' onClick={() => removeItem(product.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>



            </div>
           
        </div>
    );
};

export default Cart;