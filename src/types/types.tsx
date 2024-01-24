import { Dispatch } from 'react'
// Definir tipos para el estado y acciones
export interface Item {
    id: number
    name: string
    imge: string
    price: number
    quantity: number
}

export interface State {
    cart: {
        cartItems: Item[]
    }
}

export interface Action {
    type: string
    payload?: any
}


// Definir el tipo para el contexto
export interface StoreContextType {
    state: State
    dispatch: Dispatch<Action>
}

export interface CartProps {
    id: number; // Tipo para la prop 'id'
    
  }