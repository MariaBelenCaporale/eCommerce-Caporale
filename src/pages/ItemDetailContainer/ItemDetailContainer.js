
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [detailObject, setDetailObject] = useState({});
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            const findProduct = products.find((item) => item.id == id );
            resolve(findProduct)
        }, 1000);
    })

    useEffect(() => {
        getProduct
        .then(response => {
            setDetailObject(response);
        })
        .catch((error) => {
            console.log(error)})
    }, [])
    return <div><ItemDetail detail={detailObject} /></div>;
    
}

export default ItemDetailContainer