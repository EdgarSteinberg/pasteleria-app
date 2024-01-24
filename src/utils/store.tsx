import { useReducer, createContext, ReactNode } from "react";
import  {State, Action, StoreContextType} from '../types/types'

export const Store = createContext<StoreContextType> ({
    state: {
      cart: {
        cartItems: [],
      },
    },
    dispatch: () => {},
  });

//El estado inicial de nuestra aplicacion o variable de estado
const initialState: State = {
    cart: {
        cartItems: []
    }
}

//Funcion reductora donde se crea la logica funcional
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newItem = action.payload
            const existItem = state.cart.cartItems.find(item => item.id === newItem.id)

            const cartItems = existItem ? state.cart.cartItems.map((item) => item.name === existItem.name ? newItem : item) : [...state.cart.cartItems, newItem]

            return { ...state, cart: { ...state.cart, cartItems } }
        }

        case 'CART_REMOVE_ITEM': {
            const cartItems = state.cart.cartItems.filter((item => item.id !== action.payload.id))
            return { ...state, cart: { ...state.cart, cartItems } }
        }

        case 'REMOVE_CART': {
            const cartItems: [] = []
            return { ...state, cart: { ...state.cart, cartItems } }
        }

        default:
            return state

    }
}

// Definir los tipos para el proveedor de contexto
interface StoreProviderProps {
    children: ReactNode
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }: StoreProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}