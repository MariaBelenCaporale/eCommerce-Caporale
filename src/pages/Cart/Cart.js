import './Cart.css';
import { Fragment, useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';
import ItemCart from './ItemCart';
import PaymentForms from '../Pago/PaymentForms';






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