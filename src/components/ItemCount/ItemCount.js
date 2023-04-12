import './ItemCount.css';
import {  useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import { clear } from '@testing-library/user-event/dist/clear';


const ItemCount = ({ count, setCount, product }) => {


    const { cart, clear, removeItem, total } = useContext(CartContext);


    const onAdd = () => {
        setCount(count + 1);
    };


    const restar = () => {
        if (count === 1) {
            clear()
        } 
        setCount(count - 1);
    };




    return (
        <div className='counter'>
            <div className='controllers'>
                <button className='masMenos' disabled={count === 0} onClick={() => restar()}>-</button>
                <div>
                    <span className='spanCount'>{count}</span>
                </div>
                <button className='masMenos' disabled={count === 0} onClick={onAdd}>+</button>
            </div>
        </div>
    );
};

export default ItemCount;