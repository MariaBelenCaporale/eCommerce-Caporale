import './CartWidget.css';
import ecarrito from '../Assets/ecarrito.png';


export default function CartWidget () {
  return (
    <div className='padreCarrito'>
            <p className='carritoTotal'>1</p>
      <div className='padreImgCarrito'>
      <img src = {ecarrito} className = "imgCarrito" alt = "carrito" />
      </div>
    </div>

  );
}