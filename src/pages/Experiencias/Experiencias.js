import './Experiencias.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Item from '../../components/Item/Item';

const Experiencias = () => {
    return (
        <section className='section-experiencias'>
            
            <div className='expePadre'>
                <h2 className='expeHijo'> <span className='spanExpe'>ADQUIRÍ TUS EXPERIENCIAS </span></h2>
                <p className='expeTexto'>TODAS LAS EXPERIENCIAS INCLUYEN TRASLADO DE IDA Y VUELTA</p>

                <div className='astro-padre'>
                <img className='astro' src='./img/saludo-astronauta-03.png' />
            </div>
            </div>

            <ItemListContainer />
        </section>
    )
};

export default Experiencias;