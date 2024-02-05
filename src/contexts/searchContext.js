import {createContext, useState} from 'react';
import {SearchButtonValue} from '../constants';

const INITIAL_STATE = {
  searchTabValue: SearchButtonValue.dd,
};

export const SearchContext = createContext(INITIAL_STATE);

export const SearchContextProvider = ({children, initialData}) => {
  const [initialState, setInitialState] = useState({
    ...INITIAL_STATE,
    ...initialData,
  });

  const setSearchTab = tab =>
    setInitialState({
      ...initialState,
      searchTabValue: tab,
    });

  return (
    <SearchContext.Provider
      value={{
        ...initialState,
        methods: {
          setSearchTab,
        },
      }}>
      {children}
    </SearchContext.Provider>
  );
};
