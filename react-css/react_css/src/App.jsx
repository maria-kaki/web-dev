import Header from "./components/Header/Index"

function App() {
const estiloTitulo = {
    backgroundColor: 'red',
    color: 'blue'
}

  return (
    <>
      <Header/>
      <h1 className="titulo"
      style={estiloTitulo}
      >Titulo da pagina</h1>
    </>
  )
}

export default App
