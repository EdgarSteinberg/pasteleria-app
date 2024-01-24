import { Item } from '../types/types'

interface CartItemProps {
    addToCart: (productId: number) => void;

}

const Cart: React.FC<Item & CartItemProps> = ({ imge, name, price, id, addToCart }) => {

    return (
        <>
            <div className='card-md-3'>
            <img src={imge} height={250} width='100%' alt={name} className="card-img-top rounded" />
            <h3>{name}</h3>
            <h5>${price}</h5>
            <button className='btn btn-primary w-100' onClick={() => addToCart(id)}>
                Agregar
            </button>

            </div>
        </>
    )
}

export default Cart