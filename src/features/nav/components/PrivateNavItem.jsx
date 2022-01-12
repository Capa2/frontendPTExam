import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthContext";

export default function PrivateNavItem({ to, text, allowedRole }) {
    const { user } = useContext(AuthContext);
    function isActive({ isActive }) {
        return isActive ? "active" : "";
    }

    function isAllowed(user) {
        return user && (user.roles.includes(allowedRole) || allowedRole === "any");
    }

    if (!isAllowed(user)) return null;
    return (
        <li>
            <NavLink
                className={isActive}
                to={to} end>{text}</NavLink>
        </li>
    );
}