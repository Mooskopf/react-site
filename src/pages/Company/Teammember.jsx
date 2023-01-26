
export default function Teammember({ name, title, text, pic, linkedin }) {
    return (
        <div className="member">
            <div className="picContainer">
                <a target="_blank" rel="noopener noreferrer" href={linkedin}>
                    <img className="pic" src={pic} alt={name}></img>
                </a>
            </div>
            <br></br><br></br>
            <div className="memberName">{name}</div>
            <div className="title">{title}</div>
            <br></br>
            <div className="text">
                {text}
            </div>
        </div>
    )
}
