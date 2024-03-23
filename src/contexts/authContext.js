import {createContext, useState} from 'react';

const INITIAL_STATE = {
  isLoggedIn: false,
  loginData: {},
  // userId: null,
  userId: '10706',
  userMobileNo: null,
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
      userMobileNo: obj?.t_mbno,
    });
  };

  const handleLogoutUser = () => {
    setAuthState({
      ...authState,
      ...INITIAL_STATE,
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
