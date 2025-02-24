import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { CartAction, State } from "../types/CartRecuderType";
import { cartReducer } from "../recuders/cartReducer";
import { initialState } from "../constants/cartInitialState";

const CartContext = createContext<{ state: State; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

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
