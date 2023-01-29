import { Link } from "react-router-dom"

export default function SliderElement({ pathname, headline, text, infotext, pic, ariaLabel }) {
    return (
        <Link to={pathname} preventScrollReset={true}>
            <section className="square" aria-label={ariaLabel}>
                <div className="square-img-container">
                    <img src={pic} alt="Product"></img>
                </div>
                <div className="square-text">
                    <header>
                        <h3>{headline}</h3>
                    </header>
                    <p className="text">
                        {text}
                    </p>
                    <p className="info">{infotext} &#8594;</p>
                </div>
            </section>
        </Link>
    )
}