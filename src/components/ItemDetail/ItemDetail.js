import './ItemDetail.css'
import CicloVida from '../CicloVida/CicloVida';


const ItemDetail = ({detail}) => {

    return <div className='pa'>
    <div className='padreDetail'>

        <div className='detail'>
        <img className='imgDetail' src={detail.image} alt={detail.name} />
        </div>

        <div className='detalles'>
        <h2>{detail.name}</h2>
        <h4>{detail.price}</h4>
        <h4> Duración: {detail.duration}</h4>
        <p className='textoDetalles'>{detail.detail}</p>
        <p>{detail.description}</p>

        <h4>En stock: {detail.stock}</h4>
        <CicloVida />
        </div>

        
    </div>;
    </div>
};

export default ItemDetail;





            