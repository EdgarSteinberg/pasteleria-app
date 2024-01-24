import data from '../data/data';
import image from '../assets/mejor.png'
import Cart from '../cart/cart'

interface CartItemProps {
    addToCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ addToCart }) => {
    return (
        <>
            <h1 className='text-center mt-4 mb-5 fw-bold font-family-Roboto'><img src={image} height={100} width='auto' style={{ maxWidth: '100%' }}></img> Ilu Dulce&Salado</h1>
            <div className='row row-cols-1 row-cols-md-3 g-3'>
                {data.products.map((product) => (
                    <Cart key={product.id} {...product} addToCart={addToCart} quantity={1} />
                ))}
            </div>
        </>
    )
}

export default CartItem