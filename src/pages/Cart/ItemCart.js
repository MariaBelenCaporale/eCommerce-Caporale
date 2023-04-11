import { useState, useContext, useEffect } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";


const ItemCart = ({ product }) => {

    const { updateItem } = useContext(CartContext);

    const [quantity, setQuantity] = useState(product.quantity);

    useEffect(() => {
        updateItem(product.id, quantity);
    }, [quantity])
    
    return (
        <>
        <div className="productoTit">
        <h2 className='productoCart2'>{product.name}</h2>
        </div>
            
            <h2 className='productoCart'>Precio: USD {product.price}</h2>

            <ItemCount count={quantity} setCount={setQuantity} />

        </>
    );
};

export default ItemCart;