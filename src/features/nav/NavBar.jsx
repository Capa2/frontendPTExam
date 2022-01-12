
import NavItem from "./components/NavItem";
import PrivateNavItem from "./components/PrivateNavItem";
import NavLoginItem from "./components/NavLoginItem";

export default function NavBar({setToken}) {

    return (
        <ul className="navBar">
            <NavItem to="/" text="home" />
            <PrivateNavItem to="user" text="profile" allowedRole="user" />
            <PrivateNavItem to="admin" text="profile" allowedRole="admin"  />
            <PrivateNavItem to="admin" text="any user" allowedRole="any"  />
            <NavItem to="/about" text="About" />
            <NavLoginItem />
        </ul>
    );
}
