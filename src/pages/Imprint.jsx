import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Trans, withTranslation } from 'react-i18next'

import Book from "../assets/book.jpg"

function Imprint() {
    return (
        <div>
            <div className="headpic">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={Book} />
            </div>
            <div className="container">
                <div className="impContainer">
                    <div className="impressum">
                        <h1><Trans i18nKey="Imp.Hl"></Trans></h1>
                        <h2><Trans i18nKey="Footer.Ad"></Trans></h2>
                        <div>Lorem ipsum</div>
                        <div>Lorem ipsum 60</div>
                        <div>7777 Lorem ipsum</div>
                        <div>Lorem ipsum</div>
                        <br></br>
                        <div>Email: ipsum.info.com</div>
                        <div><Trans i18nKey="Imp.Num"></Trans></div>
                        <br></br>
                        <h2><Trans i18nKey="Imp.Res"></Trans></h2>
                        <div>Max Mustermann, Musterstraße 12, 44444 Schlumpfhausen</div>
                        <br></br>
                        <h2><Trans i18nKey="Imp.Adv"></Trans></h2>
                        <div>Max Mustermann, Musterstraße 12, 44444 Schlumpfhausen</div>
                        <br></br>
                    </div>
                    <div id="privacy">
                        <h1><Trans i18nKey="Footer.Le"></Trans></h1>
                        <div>
                            <Trans i18nKey="Imp.Dat"></Trans>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Imprint)