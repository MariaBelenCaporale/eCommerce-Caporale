import './ItemCount.css';
import {  useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

const ItemCount = ({ count, setCount }) => {


    const onAdd = () => {
        setCount(count + 1);
    };
    const restar = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    };

   


  

    return (
        <div className='counter'>
            <div className='controllers'>
                <button className='masMenos' disabled={count === 1} onClick={restar}>-</button>
                <div>
                    <span className='spanCount'>{count}</span>
                </div>
                <button className='masMenos' disabled={count === 0} onClick={onAdd}>+</button>
            </div>
        </div>
    );
};

export default ItemCount;