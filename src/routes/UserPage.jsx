import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

function UserPage() {
    const { user } = useContext(AuthContext);
    return (
        user && <>
            <h1>Hello, {user.username}</h1>
            <h3>Your role(s) are {user.roles.join()}</h3>
        </>
    );
}

export default UserPage;
