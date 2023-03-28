import './Main.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { set } from 'react-hook-form';



const Main = () => {
    const [item, setItem] = useState([])

    const url = window.location.href

    return (
        <div>
            {url === '/Main' && <div> ENCABEZADO</div>}
            <div>


                <div className='container-inicio'>
                    <div className='containerTitulo'>
                        <div>
                            <img className='planeta' src='./img/planeta-03.png' />
                        </div>
                        <h1 className='tituloWeb'><span className='span'>VIVÍ TU EXPERIENCIA GALÁCTICA</span></h1>
                    </div>

                    <div className='contieneImg'>
                        <img className='container-img' src="./img/luna-bn-04.png" alt="foto" />
                    </div>
                </div>




                <section className='sectio'>
                    <div className='expePadreMain'>
                        <div className='tituloExpMain'>
                            <h2 className='adquiriHijoMain'> <span className='spanAdquiri'>ADQUIRÍ TUS EXPERIENCIAS </span></h2>
                            <p className='adquiriTextoMain'>TODAS INCLUYEN TRASLADO DE IDA Y VUELTA</p>
                            <Link to={"/Experiencias"} className='quienesBotonMain'>EXPERIENCIAS</Link>
                        </div>
                        <div className='astronautaMain' >
                            <img className='astroMain' src='./img/astronauta-04.png' />
                        </div>
                    </div>
                </section>

                
                     

                <section className='section-quienes'>
                    <h2 className='quienesHijo'> <span className='spanQuienes'>GALÁCTICA </span></h2>
                    <div className='quienesPadre'>

                        <div className='orden'>
                            <h3 className='quienesSomos'>¿QUIÉNES SOMOS?</h3>
                            <p className='quienesTexto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

                            <Link to={"/Experiencias"} className='quienesBoton'>EXPERIENCIAS</Link>
                        </div>

                        <div className='ovni-padre'>
                            <img className='ovni-img' src='./img/ovni-02.png' />
                            <img className='vaca' src='./img/vaca-02.png' />
                        </div>
                    </div>

                </section>
            </div>
        </div>


    )
};



export default Main;
