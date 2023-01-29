import { useEffect, useState } from 'react'
import i18n from 'i18next'

function LangSelector() {

    const [deActive, setDeActive] = useState(false)

    useEffect(() => {
        if (i18n.language === "de") {
            setDeActive(true)
        } else {
            setDeActive(false)
        }
    }, [])

    function changeLanguage(e) {
        if (e.target.value === "de") {
            setDeActive(true)
            i18n.changeLanguage("de")
        } else {
            setDeActive(false)
            i18n.changeLanguage("en")
        }
    }

    return (
        <select className="language-selector" aria-label="language selector" value={deActive ? "de" : "en"} onChange={changeLanguage}>
            <option value="de" name="german">de</option>
            <option value="en" name="english">en</option>
        </select>
    )
}

export default LangSelector