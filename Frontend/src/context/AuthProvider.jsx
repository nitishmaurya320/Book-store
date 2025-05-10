import React, { useContext } from 'react';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  ;
  const initialAuthUser = localStorage.getItem('Users');
  const [authUser, setAuthUser] = React.useState(initialAuthUser ? JSON.parse(initialAuthUser) : undefined);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
