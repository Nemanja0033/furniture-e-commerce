import { CartAction, State } from "../types/CartRecuderType";

export function cartReducer(state: State, action: CartAction): State {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] };
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        case "INCREMENT":
            return {... state, items: state.items.map((item) => item.id === action.payload ? {...item, amount: item.amount + 1 } : item)};
        case "DECREMENT":
            return {... state, items: state.items.map((item) => item.id === action.payload ? {...item, amount: item.amount - 1 } : item) }
        case "CLEAR_CART":
            return { ...state, items: [] };
        default:
            return state;
    }
}