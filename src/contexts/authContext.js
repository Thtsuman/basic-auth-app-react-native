import {createContext, useState} from 'react';
import {SearchButtonValue} from '../constants';

const INITIAL_STATE = {
  isLoggedIn: false,
  loginData: {},
  userId: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children, initialData}) => {
  const [authState, setAuthState] = useState({
    ...INITIAL_STATE,
    ...initialData,
  });

  const setLoginData = obj => {
    setAuthState({
      ...authState,
      userId: obj?.t_usr,
      loginData: obj,
      isLoggedIn: true,
    });
  };

  const handleLogoutUser = () => {
    setAuthState({
      ...authState,
      loginData: {},
      isLoggedIn: false,
      userId: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        methods: {handleLogoutUser, setLoginData},
      }}>
      {children}
    </AuthContext.Provider>
  );
};
