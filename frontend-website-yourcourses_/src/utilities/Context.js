import {createContext, useContext, useReducer} from 'react';
//TODO: add Dispatching Configurations

let dispatchIsConfigured =false;

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children})=>{
  const reducerValue =  useReducer(reducer, initialState);
  //const [, dispatch] = reducerValue;
  if (!dispatchIsConfigured){
    //TODO: configure Dispatch elements
    dispatchIsConfigured = true;
  }
  return (
    <StateContext.Provider value={reducerValue}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
