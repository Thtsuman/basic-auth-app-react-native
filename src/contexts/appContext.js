import {createContext, useState} from 'react';

const INITIAL_STATE = {
  alert: {
    isVisible: false,
    message: null,
    title: null,
  },
};

export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({children, initialData}) => {
  const [initialState, setInitialState] = useState({
    ...INITIAL_STATE,
    ...initialData,
  });

  const resetAppContextState = () => {
    setInitialState(INITIAL_STATE);
  };

  const showAlert = ({message, title}) =>
    setInitialState({
      ...initialState,
      alert: {
        isVisible: true,
        message: message,
        title: title,
      },
    });

  const hideAlert = () =>
    setInitialState({
      ...initialState,
      alert: {
        isVisible: false,
        message: null,
        title: null,
      },
    });

  return (
    <AppContext.Provider
      value={{
        ...initialState,
        methods: {
          showAlert,
          hideAlert,
          resetAppContextState
        },
      }}>
      {children}
    </AppContext.Provider>
  );
};
