import { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../providers/AuthContext";
import useFetch from "../hooks/useFetch";
import { API } from "../config/server";
import { useNavigate } from 'react-router-dom';
import { InputText, InputPass } from "./Inputs";

export default function LoginForm() {
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext);

    const url = `${API}/login`;
    const [response, loading, doFetch] = useFetch();

    const [emailValue, setEmailValue] = useState();
    const [passwordValue, setPasswordValue] = useState();

    useEffect(() => {
        if (response) {
            setToken(response.token);
            navigate("/");
        }
    }, [response, setToken, navigate]);

    function submit(e) {
        if (emailValue && passwordValue) doFetch("POST", url, { email: emailValue, password: passwordValue });
        e.preventDefault();
    }

    return (
        <>
            <Form className="loginForm mt-3 m-auto" onSubmit={submit}>
                <InputText placeholder="email" onChange={setEmailValue} />
                <InputPass onChange={setPasswordValue} />
                <Button className="d-block mx-auto" type="submit" size="lg" disabled={loading || !emailValue || !passwordValue}>Sign in</Button>
            </Form>
        </>
    );
}