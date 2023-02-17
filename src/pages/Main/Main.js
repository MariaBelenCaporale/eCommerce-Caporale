import './Main.css';
import { useState } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';



const Main = () => {
    const [item, setItem] = useState([])

    const url = window.location.href




    return (
        <div>
            {url === '/Main' && <div> ENCABEZADO</div>}
        <div>

        <div className='container'>
            <div className='containerTitulo'>
                <div>
                    <img className='planeta' src='./img/planeta-03.png' />
                </div>
            <h1 className='tituloWeb'><span className='span'>VIVÍ TU EXPERIENCIA GALÁCTICA</span></h1>
            </div>

            <div className='contieneImg'>
            <img className='container-img' src = "./img/fondo-1-02.png" alt="foto" />
            </div>
        </div>

        
            {item.map((item) => <div>{item} </div>)}
            <ItemListContainer />
        </div>
        </div>

    )
}

export default Main;