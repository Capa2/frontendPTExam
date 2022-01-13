import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

function AdminPage() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <h1>Hello, {user.name}</h1>
            <h3>Your role(s) are {user.roles.join()}</h3>
        </>
    );
}

export default AdminPage;
