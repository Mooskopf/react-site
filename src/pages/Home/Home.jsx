import { Link } from "react-router-dom"
import { useTranslation, Trans, withTranslation } from 'react-i18next'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useQuery } from "react-query"

import Vid from "../../assets/video.png"
import Product1 from "../../assets/product1.jpg"
import Product2 from "../../assets/product2.jpeg"
import Hand from "../../assets/hand.png"
import Handger from "../../assets/handger.png"
import Invprev from "../../assets/invesprev.png"
import useSlideNumber from "../../hooks/useSlideNumber"
import SliderElement from "./SliderElement"
import { getHomeData } from "../../api/HomeData"
import CenterText from "../../components/CenterText"

function Home() {

    const { i18n } = useTranslation()
    const number = useSlideNumber()

    //Gets some example data using react query
    const { isLoading, isError, data, error } = useQuery({ queryKey: ["homeData"], queryFn: getHomeData })

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: number,
        slidesToScroll: 1,
    }

    if (isLoading) { return (<CenterText text={"Loading ..."} />) }
    if (isError) { return (<CenterText text={`Error: ${error.message}`} />) }

    return (
        <div className="home">
            <header className="banner">
                <LazyLoadImage
                    alt="Banner"
                    effect="blur"
                    src={i18n.language === "de" ? Handger : Hand} />
            </header>
            <main>
                <article aria-label="about-us" className="page-section">
                    <div className="container">
                        <header>
                            <h1>{i18n.language === "de" ? data.headlineDe : data.headlineEn}</h1>
                        </header>
                        <p className="text">
                            <Trans i18nKey="Home.Abtext"></Trans>
                        </p>
                        <Link to="company">
                            <button className="blue-button" type="button">
                                <Trans i18nKey="Home.Bu"></Trans>
                            </button>
                        </Link>
                    </div>
                </article>
                <section aria-label="company-video" className="grey-section">
                    <div className="container">
                        <div className="video-container">
                            <img src={Vid} alt="video"></img>
                        </div>
                    </div>
                </section>
                <section aria-label="products-slider" className="page-section">
                    <div className="container">
                        <Slider {...settings}>
                            <SliderElement ariaLabel={"product one"} pathname={"products#product1"} headline={<Trans i18nKey="Home.Ba"></Trans>} text={<Trans i18nKey="Home.Batext"></Trans>}
                                infotext={<Trans i18nKey="Home.Info"></Trans>} pic={Product1} />
                            <SliderElement ariaLabel={"product two"} pathname={"products#product2"} headline={<Trans i18nKey="Home.Ge"></Trans>} text={<Trans i18nKey="Home.Getext"></Trans>}
                                infotext={<Trans i18nKey="Home.Info"></Trans>} pic={Product2} />
                            <SliderElement ariaLabel={"investor info"} pathname={"/investors"} headline={<Trans i18nKey="Home.Inv"></Trans>} text={<Trans i18nKey="Home.Invtext"></Trans>}
                                infotext={<Trans i18nKey="Home.Info"></Trans>} pic={Invprev} />
                        </Slider>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default withTranslation()(Home)