import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

export default function SignupPage() {

    return (
        <>
            <h2 align="center">Sign up</h2>
            <SignupForm />
            <p className="mt-4" align="center">Already have an account? <Link to="/login">Click here to login</Link></p>
        </>
    );
}