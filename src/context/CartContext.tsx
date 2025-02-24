import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";

type CartItem = {
    id: string;
    name: string;
    price: number;
};

type State = {
    items: CartItem[];
};

type CartAction =
    | { type: "ADD_ITEM"; payload: any }
    | { type: "REMOVE_ITEM"; payload: string }
    | { type: "CLEAR_CART" };

const initialState: State = {
    items: typeof window !== "undefined" && localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")!)
        : []
};

function reducer(state: State, action: CartAction): State {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] };
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        case "CLEAR_CART":
            return { ...state, items: [] };
        default:
            return state;
    }
}

const CartContext = createContext<{ state: State; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]); 

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};
