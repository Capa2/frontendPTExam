import { useState, useEffect, createContext } from "react";
import HttpAlert from "../components/alerts/HttpAlert";
import { useLocation } from "react-router-dom";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState();
    const [error, setError] = useState();
    const route = useLocation();

    useEffect(() => {
        setAlert(<HttpAlert error={error} onDismiss={setAlert} />);
    }, [error]);
    
    useEffect(() => {
        setAlert();
    }, [route]);

    return <AlertContext.Provider value={{ alert, setError }}>{children}</AlertContext.Provider>;
}

export { AlertContext, AlertProvider };