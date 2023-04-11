import { Link } from "react-router-dom";
import Item from "../Item/Item";
import './ItemList.css';



const ItemList = ({ productList }) => {    

    return (
     
        <div className="itemList">
            {productList.map((product) => (
                <div key={product.id}>
                    <Item product={product} />
                </div>                
            ))
            }
        </div>
      

    );
};

export default ItemList;                            
