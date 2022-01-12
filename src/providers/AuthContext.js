import { useEffect, createContext } from "react";
import useToken from "../hooks/useToken";
import useUser from "../hooks/useUser";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [token, setToken, payload] = useToken();
    const [user, setUser] = useUser();
    
    useEffect(() => {
        setUser(payload);
    }, [payload]);

    return (<AuthContext.Provider value={{ user, token, setToken }}>{children}</AuthContext.Provider>);
}

export { AuthContext, AuthProvider };