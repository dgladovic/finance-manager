import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const auth = sessionStorage.getItem('auth');
        if (auth) {
          setAuth(JSON.parse(auth));
        }
      }, []);

    useEffect(() => {
        if (auth) {
          sessionStorage.setItem('auth', JSON.stringify(auth));
        }else {
          sessionStorage.removeItem('auth');
        }
      }, [auth]);
    
    return(
        <AuthContext.Provider value = {{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}