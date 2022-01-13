import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <h2 align="center">Log in</h2>
            <LoginForm />
            <p className="mt-4" align="center">Don't have an account? <Link to="/signup">Click here to sign up</Link></p>
        </>
    );
}

export default LoginPage;