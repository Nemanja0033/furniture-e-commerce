import React, { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    sort: string,
    name: string,
}

const initialState: State = {
    sort: '',
    name: ''
}

//reducer func
function reducer(state: State, action: any){
    switch(action.type){
        case 'SET_SORT':
            return {...state, sort: action.payload};
        case "SET_NAME":
            return {...state, name: action.payload};
        default:
            return state;
    }
}

const FilterContext = createContext<{state: State, dispatch: React.Dispatch<any>} | undefined>(undefined);

export const FilterProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <FilterContext.Provider value={{state, dispatch}}>
            {children}
        </FilterContext.Provider>
    )
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
      throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
  };