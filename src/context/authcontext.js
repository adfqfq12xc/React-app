import { createContext, useReducer } from "react";
import Authreducer from "./authreducer";
const INITIAL_STATE={
    user:null,
    isFetching:false, 
    error:false
};
export const Autcontext=createContext(INITIAL_STATE)
export const Authcontextprovider=({children})=>{
    const [state,dispatch]=useReducer(Authreducer,INITIAL_STATE);
    return (
        <Autcontext.Provider value={{
            user: state.user,
            isFetching:state.isFetching,
            error:state.error,
        dispatch,
        }}>
            {children }
            </Autcontext.Provider>
    )
}