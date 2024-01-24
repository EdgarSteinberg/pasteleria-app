
import { BsFillTrashFill } from "react-icons/bs";
import { Item } from '../types/types'

interface OrdenCompraProps {
    cartItems: Item[];
    delToCart: any
    saveInfo: () => void;
}

const OrdenCompra: React.FC<OrdenCompraProps> = ({ cartItems, delToCart, saveInfo }) => {
    return (
        <>
            <h3 className='text center'>Orden de compra</h3>
            {
                cartItems.map((item) => (
                    <div key={item.id}>
                        <p><button className='btn btn-danger' onClick={() => delToCart(item)}><BsFillTrashFill /></button> <strong >{item.name}</strong></p>
                        <p>Cantidad: {item.quantity}</p>
                    </div>
                ))
            }
            <div>
                <strong>Subtotal : ({cartItems.reduce((acc, elem) => acc + elem.quantity, 0)}) : ${
                    cartItems.reduce((acc, elem) => acc + elem.quantity * elem.price, 0)
                }</strong>
            </div>
            {cartItems.length ? <button className='btn btn-success' onClick={saveInfo}>Guardar Venta</button> : <button className='btn btn-secondary'>Guardar Venta</button>}
        </>
    )
}

export default OrdenCompra