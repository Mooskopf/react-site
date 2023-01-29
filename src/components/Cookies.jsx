import { useState } from "react"
import { withTranslation, Trans } from 'react-i18next'

function Cookies() {

    const [cookieActive, setCookieActive] = useState(true)

    function removeCookie() {
        setCookieActive(false)
    }

    return (
        <section className="cookie" aria-label="cookie information" style={cookieActive ? { transform: "translateY(0%)" } : { transform: "translateY(100%)" }}>
            <p className="text"><Trans i18nKey="Cookietext"></Trans></p>
            <button className="blue-button" type="button" onClick={removeCookie}> Okay</button>
        </section>
    )
}

export default withTranslation() (Cookies)