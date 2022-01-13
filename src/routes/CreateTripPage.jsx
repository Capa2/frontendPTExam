import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

function CreateTripPage() {
    const { user } = useContext(AuthContext);
    const {email, name, address, phone, birthYear, gender} = user;

    return (
        <>
            <h1>Hello, {name}</h1>
            <h3>Your role(s) are {user.roles.join(", ")}</h3>
            <h3>{email}, {name}, {address}, {phone}, {birthYear}, {gender}</h3>
        </>
    );
}

export default CreateTripPage;
