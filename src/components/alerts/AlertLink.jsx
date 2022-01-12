import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const AlertLink = ({ url, children }) => {
    const navigate = useNavigate();
    return (
        <Alert.Link onClick={() => navigate(url)} >{children}</Alert.Link>
    );
}

export default AlertLink;