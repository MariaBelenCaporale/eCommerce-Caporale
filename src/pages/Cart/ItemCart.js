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
            <h2 className='productoCart'>{product.name}</h2>
            <h2 className='productoCart'>USD {product.price}</h2>

            <ItemCount count={quantity} setCount={setQuantity} />

        </>
    );
};

export default ItemCart;