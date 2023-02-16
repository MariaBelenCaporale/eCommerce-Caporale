
const ItemDetail = ({detail}) => {

    return <div>
        <img src={detail.image} alt={detail.name} />
        <h2>{detail.name}</h2>
    </div>;
};

export default ItemDetail;