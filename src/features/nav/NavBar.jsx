
import NavItem from "./components/NavItem";
import PrivateNavItem from "./components/PrivateNavItem";
import NavLoginItem from "./components/NavLoginItem";

export default function NavBar({setToken}) {

    return (
        <ul className="navBar">
            <NavItem to="/" text="home" />
            <PrivateNavItem to="user" text="profile" allowedRole="user" />
            <PrivateNavItem to="trips" text="trips" allowedRole="any"  />
            <PrivateNavItem to="createtrip" text="create trip" allowedRole="admin"  />
            <PrivateNavItem to="admin" text="profile" allowedRole="admin"  />
            <NavItem to="/about" text="About" />
            <NavLoginItem />
        </ul>
    );
}
