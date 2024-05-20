import React, { createContext, useEffect, useReducer } from 'react';
import { reducer, initialState } from '../store/reducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('darkMode', state.darkMode);
  }, [state.darkMode]);


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

