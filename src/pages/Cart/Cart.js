import './Cart.css';
import { Fragment, useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { products } from '../../data/products';
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
                    quantity: product.quantity
                }
            }),
            total: total,
        })
        .then((response) => {
            console.log(response.id);
            alert(`Orden ${response.id} creada`);
            updateStocks(db);
        })
        .catch( (error) => console.log(error))
    };

    const  updateStocks = (db) => {
        
        cart.forEach((product) => {
            const querySnapshot = doc(db, 'products', product.id);

            updateDoc(querySnapshot, {
                stock: product.stock - product.quantity,
            })
            .then((res) =>{
                alert('stock actualizado');
            })
            .catch((error) => console.log(error));
        })
    };

    const handleInput = (event) => {
        setFormValue({
            ...formValue, 
            [event.target.name]: event.target.value,});
    };

    return ( 
    <div className='sosten'>
        <div className='contieneCart'> 
            
            <div className='contieneCartHijo'>
            <h2 className='detailCart'>Detalle de compra</h2>
   
                {
                    cart.length === 0 && (
                        <h2 className='negativoProducts'>No hay productos en el carrito</h2>
                    )
                }
    {cart.map((product) => (
                <div className='productCart' key={product.name}>
                    <ItemCart product={product} />
                    
                    <button className='borrarProducts' onClick={() => removeItem(product.id)}>X</button>
                    
                </div>
    ))}
        
   
   <div className='contieneCartHijoBoton'>
            
            {cart.length > 0 &&  <button className='botonCart elimina-todo' onClick={clear}>Vaciar carrito</button>}
            
            {cart.length > 0 && ( <button className='botonCart sigue-comprando' onClick={() => navigate('/Experiencias')}>Seguir comprando</button>)}

         
                
</div>
</div>
        
        

            <div className='contieneForm'>
                <div className='totalDeCompraForm'>
                    <span>Total: USD {total}</span>
                </div>
                <div className='textTar'>
                    <h2 className='tituloFormCompletar'>Ingresá tus datos</h2>
                    <p className='boucher'>Una vez que haya realizado el pago, se le enviará un email con su boucher.</p>
                </div>
        <div className='layout'>
        <PaymentForms />
        </div>
                
            </div>
                 

                </div>
                </div>






    );
};

export default Cart;