import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { InputText, InputPass } from "./Inputs";
import DefaultAlert from './alerts/DefaultAlert';
import AlertLink from "./alerts/AlertLink";
import useFetch from "../hooks/useFetch";
import { API } from "../config/server";

export default function SignupForm() {
    const url = `${API}/signup`;
    const [response, loading, doFetch] = useFetch();
    const [usernameValue, setUsernameValue] = useState();
    const [passwordValue, setPasswordValue] = useState();

    function submit(e) {
        if (usernameValue && passwordValue)
            doFetch("POST", url, { username: usernameValue, password: passwordValue });
        e.preventDefault();
    }

    return (
        <>
            {response &&
                <DefaultAlert
                    header={`Welcome, ${response.username}!`}
                    variant="success"
                >
                    <AlertLink url="/login" >Proceed to login</AlertLink>
                </DefaultAlert>
            }

            <Form className="loginForm mt-3 m-auto" onSubmit={submit}>
                <InputText placeholder="username" onChange={setUsernameValue} />
                <InputPass onChange={setPasswordValue} />
                <Button className="d-block mx-auto" type="submit" size="lg" disabled={response || loading || !usernameValue || !passwordValue}>Sign up</Button>
            </Form>
        </>);
}