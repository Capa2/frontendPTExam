import { useEffect, useState, useContext } from "react";
import makeOptions from "../utils/makeOptions";
import fetchDeta from "../utils/fetchData";
import { AuthContext } from "../providers/AuthContext";
import { AlertContext } from "../providers/AlertContext";

const useFetch = () => {
    const { signal, abort } = () => { return new AbortController(); }
    const { token } = useContext(AuthContext);
    const { setError } = useContext(AlertContext);

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const doFetch = async (method, url, body) => {
        if (loading) await abort();
        setLoading(true);
        try {
            const res = await fetchDeta(url, makeOptions(method, signal, token, body));
            setResponse(res);
        } catch (error) {
            setResponse(null);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => { if (loading) abort() };
    }, []);
    return [response, loading, doFetch];
}

export default useFetch;