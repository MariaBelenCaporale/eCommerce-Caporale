import { product } from "../../data/products";
import './Item.css';

const Item = ({product}) => {
    return <div className="marciano">
        <div className="marciano-info">
        <img className="marciano-pic" alt={product.name} src={product.image} />
        
        <div className="data-marciano">
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
        </div>
            
                
            </div>
        </div>
            
};

export default Item;