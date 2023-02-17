import { useEffect, useState } from "react";
import './CicloVida.css';
const CicloVida = () => {
    const [counter, setCounter] = useState(0);


    useEffect(() => { 
        
    }, []);

    useEffect(() => {
        if(counter > 9){
            alert('supero limite');
        }
    }, [counter]);


  

    const onAdd = () => {
        setCounter(counter + 1);
    };

    const substract = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };


    return (
    <div className="contieneNum">
        
    <div className="contiene">
        <button className="masMenos" onClick={onAdd}>+</button>
        <h2 className="num">{counter}</h2>
        <button className="masMenos" onClick={substract}>-</button>
        </div>
    </div>);
};

export default CicloVida;