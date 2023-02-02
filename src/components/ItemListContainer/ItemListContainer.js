import './ItemListContainer.css';

export default function ItemListContainer ({nombre}) {
    return (
        <li className='lista'><a className='name' href="#">{nombre}</a></li>
    )
}