import { useEffect, useState } from "react";
import useExpiration from "./useExpiration";

const useToken = (file) => {
    const localFile = file ? file : 'jwtToken';
    const getLocalToken = () => localStorage.getItem(localFile);
    const setLocalToken = (token) => localStorage.setItem(localFile, token);
    const removeLocalToken = () => localStorage.removeItem(localFile);
    const [expired, setExpirationTime] = useExpiration();
    const [token, setToken] = useState(getLocalToken());
    const [payload, setPayload] = useState();

    useEffect(() => {
        if (token) {
            const encodedPayload = token.split('.')[1];
            const parsedPayload = JSON.parse(Buffer.from(encodedPayload, 'base64'));
            setPayload(parsedPayload);
            const { exp } = parsedPayload;
            setExpirationTime(exp * 1000);
            setLocalToken(token);
        } else {
            removeLocalToken();
            setPayload(null);
        }
    }, [token]);

    useEffect(() => {
        if (expired) setToken(null);
    }, [expired]);

    return [token, setToken, payload];
}

export default useToken;