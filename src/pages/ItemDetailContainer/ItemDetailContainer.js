
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [detailObject, setDetailObject] = useState({});


    const getProduct = () => {
        const db = getFirestore();
        const querySnapshot = doc(db, 'products', id);

        getDoc(querySnapshot)
        .then((res) => {
            setDetailObject({
                id: res.id, ...res.data()
            })
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {

        getProduct();
    }, []);
    return <div>
        <ItemDetail detail={detailObject} />
    </div>;
    
}

export default ItemDetailContainer;