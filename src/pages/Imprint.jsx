import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Trans, withTranslation } from 'react-i18next'

import Book from "../assets/book.jpg"

function Imprint() {
    return (
        <div>
            <header className="banner">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={Book} />
            </header>
            <main>
                <div className="container">
                    <article className="imorint-container page-section">
                        <section className="imprint" aria-label="imprint">
                            <header>
                                <h1><Trans i18nKey="Imp.Hl"></Trans></h1>
                            </header>
                            <h2><Trans i18nKey="Footer.Ad"></Trans></h2>
                            <ul className="text undecorated-list">
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum 60</li>
                                <li>7777 Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                            <ul className="text text undecorated-list">
                                <li>Email: ipsum.info.com</li>
                                <li><Trans i18nKey="Imp.Num"></Trans></li>
                            </ul>
                            <h2><Trans i18nKey="Imp.Res"></Trans></h2>
                            <p className="text">Max Mustermann, Musterstraße 12, 44444 Schlumpfhausen</p>
                            <h2><Trans i18nKey="Imp.Adv"></Trans></h2>
                            <p className="text">Max Mustermann, Musterstraße 12, 44444 Schlumpfhausen</p>
                        </section>
                        <section id="privacy" className="page-section" aria-label="privacy-policy">
                            <header>
                                <h2><Trans i18nKey="Footer.Le"></Trans></h2>
                            </header>
                            <p className="text">
                                <Trans i18nKey="Imp.Dat"></Trans>
                            </p>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    )
}

export default withTranslation()(Imprint)