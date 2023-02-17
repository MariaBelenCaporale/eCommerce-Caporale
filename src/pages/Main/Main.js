import './Main.css';
import { useState } from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import { Link } from 'react-router-dom';







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

            <div className='adquiriPadre'>
                <h2 className='adquiriHijo'> <span className='spanAdquiri'>ADQUIRÍ TUS EXPERIENCIAS </span></h2>
                <p className='adquiriTexto'>TODAS LAS EXPERIENCIAS INCLUYEN TRASLADO DE IDA Y VUELTA</p>
            </div>

        
            {item.map((item) => <div>{item} </div>)}
            <ItemListContainer />

            <div className='quienesPadre'>
                <h2 className='quienesHijo'> <span className='spanQuienes'>GALÁCTICA </span></h2>
            <div className='orden'>
                <h3 className='quienesSomos'>¿QUIÉNES SOMOS?</h3>
                <p className='quienesTexto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>

                
                <button className='quienesBoton'>EXPERIENCIAS
                </button>

                
                

             
                </div>
            </div>
        </div>
        </div>


    )
};



export default Main;
