type CartItem = {
    count: number;
    id: string;
    title: string;
    price: number;
    img: string,
    wood_type: string,
    amount: number,
};

export type CartAction =
| { type: "ADD_ITEM"; payload: any }
| { type: "REMOVE_ITEM"; payload: string }
| { type: "INCREMENT"; payload: any}
| { type: "DECREMENT"; payload: any}
| { type: "CLEAR_CART" }


export type State = {
    items: CartItem[];
};