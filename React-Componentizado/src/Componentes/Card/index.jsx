export default function Card(props){
    return(
        <>
            <div className="skill-card">
                    <h3>{props.titulo}</h3>
                    <p>Nível: {props.nivel}</p>
            </div>
        </>
    )
}