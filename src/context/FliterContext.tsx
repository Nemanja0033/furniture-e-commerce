import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { filterReducer } from "../recuders/filterReducer";
import { initialState } from "../constants/filterInitalState";
import { State } from "../types/FilterStateType";



const FilterContext = createContext<{state: State, dispatch: React.Dispatch<any>} | undefined>(undefined);

export const FilterProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(filterReducer, initialState);

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