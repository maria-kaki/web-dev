import { useParams } from "react-router-dom"

export default function MovieDetailPage(){
    const {DetalhesFilme} = useParams()
    return(
        <>
        <h1>Movie Detail Page</h1>
        <p>O id do filme é: {DetalhesFilme} </p>
        </>
    )
}