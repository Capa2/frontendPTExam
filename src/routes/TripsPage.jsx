import useFetch from './../hooks/useFetch';
import { useEffect } from 'react';
import Trip from '../features/trips/Trip';
import { API } from '../config/server';

const TripsPage = () => {
    const url = `${API}/trip/get`;
    const [response, loading, doFetch] = useFetch();

    useEffect(() => {
        doFetch("GET", url);
    }, []);

    return (
        <>
            <h1>Trips</h1>
            {loading && <p>Loading...</p>}
            {response && response.map((tr, index) => <Trip key={index} trip={tr} />)}
        </>
    );
}

export default TripsPage;
