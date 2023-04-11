import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import CartW from '../../pages/Cart/CartW';





const CartWidget = () => {

  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  const { cart } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
  }, [cart])

  return (
<>
    {/* <button onClick={() => cambiarEstadoModal1(!estadoModal1)}>Modal</button> */}

    <Modal estado={estadoModal1} cambiarEstado={cambiarEstadoModal1} >
      <CartW />
    </Modal>


    <Link onClick={() => cambiarEstadoModal1(!estadoModal1)} className='estilo-numerito'>

      <div className='padreCarrito'>
        <div className='padreImgCarrito'>
          <img src='/img/ecarrito.png' className='imgCarrito' alt='carrito' />{total}
        </div>
      </div>
      

    </Link>
    </>
  );
};

export default CartWidget;