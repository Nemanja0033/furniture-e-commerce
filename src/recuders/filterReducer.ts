import { State } from "../types/FilterStateType";

export function filterReducer(state: State, action: any){
    switch(action.type){
        case 'SET_SORT':
            return {...state, sort: action.payload};
        case "SET_NAME":
            return {...state, name: action.payload};
        case "SET_CATEGORY":
            return {...state, category: action.payload}
        case "WOOD_TYPE":
            return {...state, wood_type: action.payload}
        case "OFFSET":
            return {...state, offset: action.payload}
        case "SET_LIMIT":
            return {...state, limit: action.payload}
        default:
            return state;
    }
}