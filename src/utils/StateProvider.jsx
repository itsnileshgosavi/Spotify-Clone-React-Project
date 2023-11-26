import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({children, initialState, Reducer}) => (
    <StateContext.Provider value={useReducer(Reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateProvider =()=>useContext(StateContext);
