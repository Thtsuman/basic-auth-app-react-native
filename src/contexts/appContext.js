import {createContext, useState} from 'react';
import {dummyOrderList} from '../dummyData/dummyOrderListData';

const INITIAL_STATE = {
  alert: {
    isVisible: false,
    message: null,
    title: null,
  },
  orders: {
    // list: [],
    list: dummyOrderList,
    totalOrderCount: null,
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

  const setOrderList = orderList =>
    setInitialState({
      ...initialState,
      orders: {
        list: orderList,
        totalOrderCount: orderList.length,
      },
    });

  const resetOrderList = () =>
    setInitialState({
      ...initialState,
      orders: INITIAL_STATE.orders,
    });

  return (
    <AppContext.Provider
      value={{
        ...initialState,
        methods: {
          showAlert,
          hideAlert,
          resetAppContextState,
          setOrderList,
          resetOrderList,
        },
      }}>
      {children}
    </AppContext.Provider>
  );
};
