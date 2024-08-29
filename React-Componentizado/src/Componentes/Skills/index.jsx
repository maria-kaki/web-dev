import Card from "../Card";

function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
                <Card 
                  titulo = {"React"} 
                  nivel = {"Lutando"}
                  tempoxp = {"2 meses"}/>
                <Card 
                  titulo = {"CSS Grid" }
                  nivel={"Intermediário"}
                  tempoxp={"3 meses"}/>
                <Card 
                  titulo = {"React"} 
                  nivel={"Lutando"}
                  tempoxp={"4 meses"}/>
    </div>
  );
}

export default Skills;