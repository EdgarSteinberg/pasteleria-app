import data from '../data/data';
import { useContext } from 'react';
import CartItem from "../cartItem/cartItem";
import OrdenCompra from "../ordenCompra/ordenCompra";
import { StoreContextType, Item } from '../types/types';
import { Store } from '../utils/store';
import appfirabase from '../credenciales/credenciales'

import { getFirestore, collection, addDoc } from 'firebase/firestore';


const db = getFirestore(appfirabase)
const CartListContainer = () => {
    const { state, dispatch } = useContext<StoreContextType>(Store);
    const { cart: { cartItems } } = state;

    const addToCart = (id: number) => {
        const product = data.products.find((prod) => prod.id === id);
        const existItem = state.cart.cartItems.find((prod) => prod.id === product?.id) as Item;
        const quantity = existItem ? existItem.quantity + 1 : 1;

        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    };
    const delToCart = (id: any) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: id });
    }

    const saveInfo = async () => {
        try {
            await addDoc(collection(db, 'ventas'), {
                ...arreglo, subtotal
            })
        } catch (error) {
            alert("ocurrio un error")
            console.log(error)
        }
        dispatch({ type: 'REMOVE_CART' })
        alert("guardado con exito")
    }

    const subtotal = cartItems.reduce((acc, elem) => acc + elem.quantity * elem.price, 0)
    const arreglo = cartItems;

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <CartItem addToCart={addToCart} />
                    </div>
                    <div className='col-md-4'>
                        <div className='card card-body mt-5'>
                            <OrdenCompra cartItems={cartItems} delToCart={delToCart} saveInfo={saveInfo} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <footer className='bg-dark p-3 mt-5'>
                    <p className='text-center text-white'>Todos los derechos reservados</p>
                </footer>
            </div>
        </>
    );
};

export default CartListContainer;
