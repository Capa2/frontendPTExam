import {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthContext";

export default function NavLoginItem() {
    const navigate = useNavigate();
    const { user, setToken } = useContext(AuthContext);

    function isActive({ isActive }) {
        return isActive ? "activeNavItem" : "";
    }

    const logout = () => {setToken(null); navigate("/")}

    return (
        <div className="navLoginItem">
            {user ? <div>
                <li><span className="userInfo">{user.username}</span> <span className="badge bg-primary rounded-pill">{user.roles.join(", ")}</span></li>
                <li><NavLink to="/" onClick={logout}>Sign out</NavLink></li>
            </div>
                : <li><NavLink className={isActive} to="/login">Sign in</NavLink></li>
            }
        </div>);
}