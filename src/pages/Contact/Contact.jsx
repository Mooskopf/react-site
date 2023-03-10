import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useState } from "react"
import { Trans, withTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Link } from "react-router-dom"

import Mail from "../../assets/contact.jpg"
import Mailger from "../../assets/contactger.png"

function Contact() {

    const [output, setOutput] = useState("")
    const [checked, setChecked] = useState(false)
    const [red, setRed] = useState(false)
    const [error, setError] = useState(false)

    //Sets the checked state based on the previous one
    function checkboxClicked() {
        setChecked(prev => !prev)
        setRed(false)
    }

    //Replaces the normal form error when the checkbox is unchecked with a red border effect
    function checkCheckbox() {
        if (!checked) {
            setRed(true)
        }
    }

    function resetOutput() {
        setOutput("")
    }

    function handleSubmit(e) {
        e.preventDefault();

        const name = e.target.name.value
        const mail = e.target.mail.value
        const subject = e.target.subject.value
        const message = e.target.message.value

        axios({
            method: "POST",
            url: "/api/send",
            baseURL: window.location.protocol + '//' + window.location.host,
            data: {
                name: name,
                email: mail,
                subject: subject,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                e.target.reset()
                setError(false)
                setOutput("Email sent!")
            } else if (response.data.msg === 'fail') {
                if (i18n.language === "en") {
                    setError(true)
                    setOutput("E-mail could not be sent")
                } else {
                    setError(true)
                    setOutput("E-mail konnte nicht gesendet werden")
                }
            }
        }).catch((err) => {
            setError(true)
            setOutput(err.toString())
        })
    }

    return (
        <div className="contact">
            <header className="banner">
                <LazyLoadImage
                    alt="HomeBanner"
                    effect="blur"
                    src={i18n.language === "de" ? Mailger : Mail} />
            </header>
            <main>
                <section aria-label="contact-form" className="page-section">
                    <div className="container">
                        <form onSubmit={handleSubmit.bind(this)}>
                            <ul>
                                <header>
                                    <h2><Trans i18nKey="Contact.Cu"></Trans></h2>
                                </header>
                                <div onClick={resetOutput}>
                                    <li><input aria-label="name" className="input-text" type="text" name="name" required placeholder="Name"></input></li>
                                    <li><input aria-label="email" className="input-text" type="email" name="mail" required placeholder="E-Mail"></input></li>
                                    <li><input aria-label="subject" className="input-text" type="text" name="subject"
                                        required placeholder={i18n.language === "en" ? "Subject" : "Betreff"}></input></li>
                                    <li><textarea aria-label="message" name="message"
                                        required placeholder={i18n.language === "en" ? "Message" : "Nachricht"}></textarea></li>
                                    <li className="check-item">
                                        <label className="check-container">
                                            <Trans i18nKey="Contact.Ch1"></Trans> <Link to="impressum#datenschutz" className="imprint-link"><Trans i18nKey="Contact.Ch2"></Trans></Link> <Trans i18nKey="Contact.Ch3"></Trans>
                                            <input type="checkbox" required onClick={checkboxClicked} />
                                            <span className="checkmark" style={red ? { border: "1px solid red" } : { border: "" }}></span>
                                        </label>
                                    </li>
                                </div>
                                <li><button type="submit" className="blue-button" onClick={checkCheckbox}><Trans i18nKey="Contact.Se">Send</Trans></button></li>
                                <li><p className="output" aria-label="output message" style={error ? { color: "red" } : { color: "black" }}>{output}</p></li>
                            </ul>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default withTranslation()(Contact)