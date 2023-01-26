import { Link } from "react-router-dom"

export default function SliderElement({ pathname, headline, text, infotext, pic }) {
    return (
        <div>
            <Link to={pathname} preventScrollReset={true}>
                <div className="square">
                    <div className="imgContainer">
                        <img src={pic} alt="Product"></img>
                    </div>
                    <div className="text">
                        <h3>{headline}</h3>
                        <div className="linkText">
                            {text}
                        </div>
                        <div className="info">{infotext} &#8594;</div>
                        <br></br><br></br>
                    </div>
                </div>
            </Link>
        </div>
    )
}