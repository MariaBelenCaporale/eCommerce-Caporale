import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
      const { cart } = useContext(CartContext);
      const [ total, setTotal] = useState(0);
      useEffect(() => {
        setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
      }, [cart])

  return (

    <Link to={'/cart'} className='estilo-numerito'>
        <div className='padreCarrito'>

<div className='padreImgCarrito'>
  <img src='/img/ecarrito.png' className='imgCarrito' alt='carrito' />{total}
</div>
</div>
    </Link>



  );
};

export default CartWidget;