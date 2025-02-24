import { State } from "../types/CartRecuderType";

export const initialState: State = {
    items: typeof window !== "undefined" && localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")!)
        : []
};

