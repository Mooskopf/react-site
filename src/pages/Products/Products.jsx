import { useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { withTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'

import Glass from "../../assets/glass.png"
import GlassGer from "../../assets/glassger.png"
import Product1 from "../../assets/product1.jpg"
import Product2 from "../../assets/product2.jpeg"
import Vid from "../../assets/video.png"


function Products() {

    const [vidActive, setVidActive] = useState(false)

    function vidClick() {
        setVidActive(true)
    }

    function back() {
        setVidActive(false)
    }

    return (
        <div className="products">
            <header className="banner">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={i18n.language === "de" ? GlassGer : Glass} />
            </header>
            <main>
                <div className="container">
                    {!vidActive &&
                        <article aria-label="products" className="page-section">
                            <header>
                                <h1><Trans i18nKey="Prod.Op"></Trans></h1>
                            </header>
                            <div className="line"></div>
                            <div className="products">
                                <section className="product1-container" id="product1" aria-label="product1">
                                    <div className="product1-desktop">
                                        <img src={Product1} alt="Prod1"></img>
                                    </div>
                                    <div>
                                        <div className="text">
                                            <header>
                                                <h3><Trans i18nKey="Home.Ba"></Trans></h3>
                                            </header>
                                            <Trans i18nKey="Prod.Btext1"></Trans>
                                            <br></br><br></br>
                                            <Trans i18nKey="Prod.Btext2"></Trans>
                                            <br></br>
                                            <br></br>
                                            <button className="blue-button" onClick={vidClick} type="button" id="vidbutton">Video</button>
                                        </div>
                                    </div>
                                    <div className="product1-mobile">
                                        <img src={Product1} alt="Product1"></img>
                                    </div>
                                </section>
                                <section className="product2-container" id="product2" aria-label="product2">
                                    <div>
                                        <div className="text">
                                            <header>
                                                <h3><Trans i18nKey="Home.Ge"></Trans></h3>
                                            </header>
                                            <Trans i18nKey="Prod.Gtext1"></Trans>
                                            <br></br><br></br>
                                            <Trans i18nKey="Prod.Gtext2"></Trans>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={Product2} alt="Product2"></img>
                                    </div>
                                </section>
                            </div>
                        </article>}
                    {vidActive &&
                        <article className="products-video-container page-section">
                            <button className="blue-button" type="button" onClick={back}>&laquo; <Trans i18nKey="Prod.Bu"></Trans></button>
                            <img src={Vid} alt="vid"></img>
                        </article>}
                </div>
            </main>
        </div>
    )
}

export default withTranslation()(Products)