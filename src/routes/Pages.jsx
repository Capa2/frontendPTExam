import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import NoMatchPage from "./NoMatchPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import CreateTripPage from "./CreateTripPage";

import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { AlertContext } from "../providers/AlertContext";
import ErrorBoundary from "../providers/ErrorBoundery";
function Pages() {

    const { alert } = useContext(AlertContext);

    return (
        <Container className="pageContent pt-3 pb-3" fluid="sm">
            <ErrorBoundary>
                {alert}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/createtrip" element={<CreateTripPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<NoMatchPage />} />
                </Routes>
            </ErrorBoundary>
        </Container>
    );
}

export default Pages;