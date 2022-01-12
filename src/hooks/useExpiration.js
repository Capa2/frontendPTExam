import { useEffect, useState } from "react";
// Epoch time = seconds since 01/01/1970
const useExpiration = () => {
    const [expirationTime, setExpirationTime] = useState(0);
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        const epoch = Date.now();
        const countdown = expirationTime - epoch;
        if (countdown > 0) {
            setExpired(false);
            window.setTimeout(() => setExpired(true), countdown);
        }
        return () => window.clearTimeout();
    }, [expirationTime]);

    return [expired, setExpirationTime];
}

export default useExpiration;