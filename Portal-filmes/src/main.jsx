import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true,element: <Home/>},
      {path:'/filmes', element: <MovieListPage/>},
      {path:'/filmes/detalhes-filme', element: <MovieDetailPage/>},
      {path:'/generos', element: <GenreListPage/>},
      {path:'/generos/lista-por-genero', element: <MoviesByGenrePage/>},
      {path:'*', element: <PageNotFound/>}
    ]
  }
]
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
