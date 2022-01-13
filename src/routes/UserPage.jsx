import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

function UserPage() {
    const { user } = useContext(AuthContext);
    const {email, name, address, phone, birthYear, gender} = user;

    return (
        user && <>
            <h1>Hello, {name}</h1>
            <h3>Your role(s) are {user.roles.join(", ")}</h3>
            <h5>{email}, {name}, {address}, {phone}, {birthYear}, {gender}</h5>
        </>
    );
}

export default UserPage;
