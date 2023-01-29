
export default function TeamMember({ name, title, text, pic, linkedin }) {
    return (
        <section className="member" aria-label={name}>
            <a target="_blank" rel="noopener noreferrer" href={linkedin}>
                <div className="member-img-container">
                    <img src={pic} alt={name}></img>
                </div>
            </a>
            <header><h4 className="member-name">{name}</h4></header>
            <p className="title">{title}</p>
            <p className="text">
                {text}
            </p>
        </section>
    )
}
