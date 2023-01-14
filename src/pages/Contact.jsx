import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useState } from "react"
import { Trans, withTranslation } from 'react-i18next'
import i18n from 'i18next'
import { Link } from "react-router-dom"

import Mail from "../assets/contact.jpg"
import Mailger from "../assets/contactger.png"

function Contact() {

    const [output, setOutput] = useState("")
    const [checked, setChecked] = useState(false)
    const [red, setRed] = useState(false)
    const [error, setError] = useState(false)

    //Sets the checked state based on the previous one
    function checkboxClicked(){
        setChecked(prev => !prev)
        setRed(false)
    }

    //Replaces the normal form error when the checkbox is unchecked with a red border effect
    function checkCheckbox(){
        if(!checked){
            setRed(true)
        }
    }

    function resetOutput(){
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
            <div className="headpic">
                <LazyLoadImage
                    alt="HomeBanner"
                    effect="blur"
                    src={i18n.language === "de" ? Mailger : Mail} />
            </div>
            <div className="container">
                <form onSubmit={handleSubmit.bind(this)} onClick={resetOutput}>
                    <ul className="inputList">
                        <h2><Trans i18nKey="Contact.Cu"></Trans></h2>
                        <li><input className="inText" type="text" name="name" required placeholder="Name"></input></li>
                        <li><input className="inText" type="email" name="mail" required placeholder="E-Mail"></input></li>
                        <li><input className="inText" type="text" name="subject"
                            required placeholder={i18n.language === "en" ? "Subject" : "Betreff"}></input></li>
                        <li><textarea name="message"
                            required placeholder={i18n.language === "en" ? "Message" : "Nachricht"}></textarea></li>
                        <li className="checkItem">
                            <label className="checkContainer">
                                <Trans i18nKey="Contact.Ch1"></Trans> <Link to="impressum#datenschutz" id="checkLink"><Trans i18nKey="Contact.Ch2"></Trans></Link> <Trans i18nKey="Contact.Ch3"></Trans>
                                <input type="checkbox" required onClick={checkboxClicked} />
                                <span className="checkmark" style={red ? {border: "1px solid red"} : {border: ""}}></span>
                            </label>
                        </li>
                        <li><button type="submit" className="bluebutton" onClick={checkCheckbox}><Trans i18nKey="Contact.Se">Send</Trans></button></li>
                        <li><div className="output" style={error ? {color: "red"} : {color: "black"}}>{output}</div></li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default withTranslation() (Contact)