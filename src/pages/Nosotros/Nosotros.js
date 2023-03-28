import './Nosotros.css';
import { Link } from 'react-router-dom';


const Nosotros = () => {
    return (
        <section className='quienes-section'>
            <div className='quienes-Padre'>
                <div className='orden-section'>
                    <h1 className='quienes-Somos'><span className='span-Quienes'>SOBRE NOSOTROS</span></h1>
                    <p className='quienes-Texto'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>

                    <Link to={"/Experiencias"} className='quienesBoton'>
                        EXPERIENCIAS
                    </Link>
                </div>

                <div className='ovni-padre'>
                    <img className='ovni-img' src='./img/ovni-02.png' />
                    <img className='vaca' src='./img/vaca-02.png' />
                </div>
            </div>
        </section>
    )
};

export default Nosotros;