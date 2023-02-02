import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from '../CardWidget/CartWidget';
import './NavBar.css';

export default function NavBar () {
    return (
        <nav className='navPadre'>
            <ul className='constLista'>
                <ItemListContainer nombre= "INICIO" />
                <ItemListContainer nombre= "CONTACTO"/>
            </ul>
            <CartWidget/>
        </nav>
    );
}




