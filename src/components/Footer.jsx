import { Link } from "react-router-dom"
import { Trans, withTranslation } from 'react-i18next'


import Logo from "../assets/logo.png"

function Footer() {
    return (
        <footer>
            <article className="footer" aria-label="footer content top">
                <div className="container">
                    <div className="footer-grid">
                        <section className="logo-footer" aria-label="company logo">
                            <Link to="/"><img alt="Logo" src={Logo}></img></Link>
                        </section>

                        <section className="footer-third">
                            <header>
                                <h3><Trans i18nKey="Footer.Ad"></Trans></h3>
                            </header>
                            <ul className="text undecorated-list">
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum 60</li>
                                <li>7777 Lorem ipsum</li>
                            </ul>
                        </section>

                        <section role="navigation" className="footer-third" id="nav">
                            <header>
                                <h3>Navigation</h3>
                            </header>
                            <ul className="text undecorated-list">
                                <li><Link to="/"> Home</Link></li>
                                <li><Link to="/company"> <Trans i18nKey="Nav.Co"></Trans></Link></li>
                                <li><Link to="/products"> <Trans i18nKey="Nav.Pr"></Trans></Link></li>
                                <li><Link to="/investors"> <Trans i18nKey="Nav.Inv"></Trans></Link></li>
                                <li><Link to="/contact"> <Trans i18nKey="Nav.Con"></Trans></Link></li>
                            </ul>
                        </section>

                        <section role="navigation" className="footer-third">
                            <header>
                                <h3><Trans i18nKey="Footer.Mo"></Trans></h3>
                            </header>
                            <ul className="text undecorated-list">
                                <li><Link to="/imprint"><Trans i18nKey="Footer.Inf"></Trans></Link></li>
                                <li><Link to="/imprint#privacy" preventScrollReset={true}><Trans i18nKey="Footer.Le"></Trans></Link></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </article>

            <section className="bar" aria-label="copyright info">
                © 2023 Florin Brüske
            </section>
        </footer>
    )
}

export default withTranslation()(Footer)