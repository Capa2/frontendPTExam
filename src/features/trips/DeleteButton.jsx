import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthContext";
import useFetch from '../../hooks/useFetch';
import { API } from "../../config/server";

const DeleteButton = ({ tripId, setDeleted }) => {
    const { user } = useContext(AuthContext);
    const [response, loading, doFetch] = useFetch();

    useEffect(() => {
        if (response) setDeleted(true);
    }, [response]);

    const handleClick = () => {
        doFetch("DELETE", `${API}/trip/delete/${tripId}`);
    }

    return (
        user.roles.includes("admin") && <Button
            className="mt-2"
            variant="danger"
            disabled={loading}
            onClick={handleClick}
        >delete</Button >
    );
}

export default DeleteButton;