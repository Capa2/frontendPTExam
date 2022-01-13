
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthContext';
import useFetch from '../../hooks/useFetch';
import { Button } from "react-bootstrap";
import { API } from "../../config/server";
const AssignButton = ({ tripId }) => {
    console.log({ tripId });
    const { user } = useContext(AuthContext);
    const [response, loading, doFetch] = useFetch();
    const [isParticipant, setIsParticipant] = useState(false);
    const link = API + "/trip/" + (isParticipant ? "leave/" : "join/") + tripId + "/" + user.email;

    useEffect(() => {
        if (tripId > 0) doFetch("GET", API + "/trip/isParticipant/" + tripId + "/" + user.email);
    }, [tripId]);

    useEffect(() => {
        console.log({ response });
        if (isParticipant != response) setIsParticipant(response);
    }, [response]);

    return (
        user.roles.includes("user") && <Button
            className="mt-2"
            disabled={loading}
            variant={isParticipant ? "danger" : "success"}
            onClick={() => { doFetch("GET", link) }}
        >{isParticipant ? "leave" : "join"}</Button >
    );
}

export default AssignButton;