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
      > Titulo da pagina</h1>

      <p className="text-5xl md:text-purple-500 w-[350px] text-fiapPrimary bg-gray-800 ml-8 flex justify-center">Parágrafo</p>
    </>
  )
}

export default App
