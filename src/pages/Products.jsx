import { useState } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { withTranslation, Trans } from 'react-i18next'
import i18n from 'i18next'

import Glass from "../assets/glass.png"
import GlassGer from "../assets/glassger.png"
import Product1 from "../assets/product1.jpg"
import Product2 from "../assets/product2.jpeg"
import Vid from "../assets/video.png"


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
            <div className="headpic">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={i18n.language === "de" ? GlassGer : Glass} />
            </div>
            <div className="container">
                {!vidActive ?
                    <div id="bgid">
                        <h1><Trans i18nKey="Prod.Op"></Trans></h1>
                        <div className="line" id="vmLine"></div>
                        <div className="bg">
                            <div className="p1Container" id="product1">
                                <div className="p1Desktop">
                                    <img src={Product1} alt="Prod1"></img>
                                </div>
                                <div>
                                    <div className="text">
                                        <h3><Trans i18nKey="Home.Ba"></Trans></h3>
                                        <Trans i18nKey="Prod.Btext1"></Trans>
                                        <br></br><br></br>
                                        <Trans i18nKey="Prod.Btext2"></Trans>
                                        <br></br>
                                        <br></br>
                                        <button className="bluebutton" onClick={vidClick} type="button" id="vidbutton">Video</button>
                                    </div>
                                </div>
                                <div className="p1Mobile">
                                    <img src={Product1} alt="Product1"></img>
                                </div>
                            </div>
                            <div className="p2Container" id="product2">
                                <div>
                                    <div className="text">
                                        <h3><Trans i18nKey="Home.Ge"></Trans></h3>
                                        <Trans i18nKey="Prod.Gtext1"></Trans>
                                        <br></br><br></br>
                                        <Trans i18nKey="Prod.Gtext2"></Trans>
                                    </div>
                                </div>
                                <div>
                                    <img src={Product2} alt="Product2"></img>
                                </div>
                            </div>
                        </div>
                    </div> : <></>}
                {vidActive ?
                    <div className="batteryVid">
                        <button className="bluebutton"type="button" onClick={back}>&laquo; <Trans i18nKey="Prod.Bu"></Trans></button>
                        <img src={Vid} alt="vid"></img>
                    </div> : <></>}
            </div>
        </div>
    )
}

export default withTranslation()(Products)