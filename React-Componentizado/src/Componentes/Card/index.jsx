export default function Card({titulo,nivel,tempoxp}){
    return(
        <>
            <div className="skill-card">
                    <h3>{titulo}</h3>
                    <p>Nível: {nivel}</p>
                    <p>Tempo XP: {tempoxp}</p>
            </div>
        </>
    )
}