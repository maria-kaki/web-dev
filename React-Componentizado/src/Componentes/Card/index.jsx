export default function Card({ dados }){
    return(
        <>
        {
            dados.map(skill => (
            <div className="skill-card" style={{color: skill.color}}>
                <h3>{skill.titulo}</h3>
                <p>Nível: {skill.nivel}</p>
                <p>Tempo XP: {skill.tempoxp}</p>
            </div>
            ))
        }
        </>
    )
}