import Card from "../Card";

function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
                <Card titulo = "React" nivel="Lutando"/>
                <Card titulo = "CSS Grid" nivel="Intermediário"/>
                <Card titulo = "React" nivel="Lutando"/>
                <div className="skill-card">
                    <h3>CSS</h3>
                    <p>Nível: Intermediário</p>
                </div>
                <div className="skill-card">
                    <h3>JavaScript</h3>
                    <p>Nível: Básico</p>
                </div>
    </div>
  );
}

export default Skills;