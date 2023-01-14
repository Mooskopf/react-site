import { Link } from "react-router-dom"

export default function NavLink({ name, time, navActive, pathname }) {
    return (
        <li style={navActive ? { animation: "navLinkFade 0.5s ease forwards " + time + "s" } : { animation: "" }}>
            <Link to={pathname}><font style={window.location.pathname === pathname ? { color: "green" } : { color: "grey" }}>{name}</font></Link>
        </li>
    )
}