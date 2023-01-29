import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import i18n from 'i18next';
import { Trans, withTranslation } from 'react-i18next'

import Chart from "../../assets/chart.png"
import Chartger from "../../assets/chartger.png"
import { useState } from "react"


function Investors() {

    const [formActive, setFormActive] = useState(true)
    const [output, setOutput] = useState("")

    function resetOutput() {
        setOutput("")
    }

    function handleSubmit(e) {
        e.preventDefault()

        const password = e.target.password.value

        if (password === process.env.REACT_APP_PASSWORD) {
            setFormActive(false)
        } else {
            setOutput(i18n.language === "en" ? "Wrong Password" : "Falsches Passwort")
        }
    }

    return (
        <div className="investors">
            <header className="banner">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={i18n.language === "de" ? Chartger : Chart} />
            </header>
            <main>
                <div className="container">
                    <article className="investors-container page-section" aria-label="investors">
                        {formActive ?
                            <section aria-label="password-input">
                                <form id="login-form" onSubmit={handleSubmit.bind(this)}>
                                    <ul className="password-list">
                                        <li><header><h2><Trans i18nKey="Inve.He"></Trans></h2></header></li>
                                        <li><input type="password" name="password" onClick={resetOutput}
                                            required placeholder={i18n.language === "en" ? "Password" : "Passwort"}></input></li>
                                        <li><button className="blue-button" type="submit"><Trans i18nKey="Inve.Su"></Trans></button></li>
                                        <li><div style={{ color: "red" }}>{output}</div></li>
                                    </ul>
                                </form>
                            </section> :
                            <section className="download" aria-label="content-download">
                                <header>
                                    <h2><Trans i18nKey="Inve.Hi"></Trans></h2>
                                </header>
                                <div className="text">
                                    <Trans i18nKey="Inve.Text"></Trans>
                                </div>
                                <br></br>
                                <a href="../dummy.pdf" download>
                                    <button className="blue-button" type="button"><Trans i18nKey="Inve.Dl"></Trans></button>
                                </a>
                            </section>
                        }
                    </article>
                </div>
            </main >
        </div >
    )
}

export default withTranslation()(Investors)