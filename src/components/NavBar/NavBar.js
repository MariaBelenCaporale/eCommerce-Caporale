import './NavBar.css';

export default function NavBar () {
    return (
        <div className='navPadre'>
            <img className='imgLogo' src="#"></img>
            <ul className='constLista'>
                <li className='lista'><a className='btnNav' href='#'>Inicio</a></li>
                <li className='lista'><a className='btnNav' href='#'>Nosotr@s</a></li>
                <li className='lista'><a className='btnNav' href='#'>Ver carrito</a></li>
            </ul>
        </div>
    );
}




