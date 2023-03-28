import './Experiencias.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Experiencias = () => {
    return (
        <section className='section-experiencias'>
            
            <div className='expePadre'>

                <div className='tituloExp'>
                <h2 className='expeHijo'> ADQUIRÍ TUS EXPERIENCIAS </h2>
                <p className='expeTexto'>TODAS INCLUYEN TRASLADO DE IDA Y VUELTA</p>
                </div>
                <div className='astro-padre'>
                <img className='astro' src='./img/saludo-astronauta-03.png' />
            </div>
            </div>
            <div className='ItemContenido'>
            <ItemListContainer />
            </div>
        </section>
    )
};

export default Experiencias;