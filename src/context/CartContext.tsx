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