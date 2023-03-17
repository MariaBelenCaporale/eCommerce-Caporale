import { CartContext } from "./CartContext";
import { useState, useEffect } from "react";


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))
    }, [cart]);

    const addItem = (item, quantity) => {
        isInCart(item.id);

        if (isInCart(item.id)) {
            const newCart = cart.map((product) => {
                if (product.id === item.id) {
                    product.quantity = product.quantity + quantity;
                    return product
                } else {
                    return product
                }
            })
            setCart(newCart)
        } else {
            const product = {
                id: item.id,
                name: item.name,
                quantity: quantity,
                description: item.description,
                detail: item.detail,
                price: item.price,
                duration: item.duration,
                stock: item.stock,
                category: item.category,
                image: item.image,
            };
            setCart([...cart, product]);
        }
    };



    const clear = () => {
        setCart([]);
    };

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId))
    };

    const isInCart = (productId) => {
        if (cart.find((product) => product.id === productId)) {
            return true;
        } else {
            return false;
        }
    };

    const updateItem = (productId, newQuantity) => {
        const newCart = cart.map((product) => {
            if (productId === product.id) {
                return {
                    ...product,
                    quantity: newQuantity
                }
            } else {
                return product
            }
        })
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem, total, setCart, updateItem }}>{children}</CartContext.Provider>
    )
};

export default CartProvider;