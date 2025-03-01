import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";

type State = {
    items: any[],
}

const initalState: State = {
    items: []
};

function reducer(state: State, action: any){
    switch(action.type){
        case "ADD_ITEM":
            return {...state, items: action.payload};
        case "REMOVE_ITEM":
            return {...state, items: state.items.filter((item: any) => item.id !== action.payload)};
        default:
            return state;
    }
};

const CartContext = createContext<{state: State, dispatch: any } | undefined>(undefined);

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) throw new Error("useCart must be used within cartProvider");
    return context
};