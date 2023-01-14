export default function CenterText({text}) {
    return (
        <div style={{ height: "100dvh" }}>
            <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>{text}</h1>
        </div>
    )
}