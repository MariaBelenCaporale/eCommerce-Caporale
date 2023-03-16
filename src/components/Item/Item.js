import { product } from "../../data/products";
import './Item.css';


const Item = ({product}) => {
    return <div className="marciano">
        <div className="marciano-info">
        <img className="marciano-pic" alt={product.name} src={`./img/${product.image}`} />
        </div>

        <div className="data-marciano">
                <h2 className="titulo">{product.name}</h2>
                <h3 className="precio">USD {product.price}</h3>
                <p className="detalle">{product.description}</p>
                <button className="botonCompra"> VER DETALLE</button>

        </div>
            
      
            
        </div>
            
};

export default Item;