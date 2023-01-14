import { useState } from "react"
import { Link } from "react-router-dom"
import LangSelector from "./LangSelector"
import { Trans, withTranslation } from 'react-i18next'
import useWindowSize from "../hooks/useWindowSize"
import NavLink from "./NavLink"

import Logo from "../assets/logo.png"


function Navbar() {

    const [navActive, setNavActive] = useState(false)
    const size = useWindowSize()

    //Toggles the navigation bar on mobile with animation
    function toggleNav() {
        if (size <= 1048) {
            setNavActive(prev => !prev)
        }
    }

    function closeNav() {
        setNavActive(false)
    }

    return (
        <nav>
            <Link to="/" preventScrollReset={false} onClick={closeNav}><img src={Logo} alt="Logo"></img ></Link>
            <ul onClick={toggleNav} className="nav-links" style={size <= 1048 ? navActive ? { transform: "translateX(0%)" } : { transform: "translateX(100%)" } : {}}>
                <NavLink name={"Home"} time={0.4} navActive={navActive} pathname={"/"} />
                <NavLink name={<Trans i18nKey="Nav.Co"></Trans>} time={0.6} navActive={navActive} pathname={"/company"} />
                <NavLink name={<Trans i18nKey="Nav.Pr"></Trans>} time={0.8} navActive={navActive} pathname={"/products"} />
                <NavLink name={<Trans i18nKey="Nav.Inv"></Trans>} time={1} navActive={navActive} pathname={"/investors"} />
                <NavLink name={<Trans i18nKey="Nav.Con"></Trans>} time={1.2} navActive={navActive} pathname={"/contact"} />
            </ul>
            <LangSelector />
            <div className="mobile-nav" style={navActive ? { backgroundColor: "lightgrey" } : { backgroundColor: "white" }} onClick={toggleNav}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default withTranslation()(Navbar)