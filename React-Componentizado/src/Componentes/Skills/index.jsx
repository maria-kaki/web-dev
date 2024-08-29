import Card from "../Card";

function Skills({ skills }) {

  // dicionário = tipo um banco de dados
  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Avançado",
      tempoxp: "10 anos",
      color: "blue",
    },
    {
      titulo: "CSS",
      nivel: "Básico",
      tempoxp: "1 ano",
      color: "red",
    },
    {
      titulo: "React",
      nivel: "lutando",
      tempoxp: "1 mês",
      color: "green",
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados = {habilidades}/>
    </div>
  );
}

export default Skills;