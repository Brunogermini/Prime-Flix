import{useEffect, useState} from 'react';
import './home.css';
import api from '../../services/api';
import{ Link } from 'react-router-dom';



//URL da Api https://api.themoviedb.org/3/movie/now_playing?api_key=5041182d4efc5683067f5cc54631a157

function Home(){

const [filmes, setFilmes] = useState([]);
const [loading, setLoading] = useState((true));

useEffect(()=>{

async function loadFilmes(){

    const response = await api.get("movie/now_playing",{
params:{
api_key: "5041182d4efc5683067f5cc54631a157",
language:"pt-BR",
page:1,

}})

//console.log(response.data.results.slice(0,10))
setFilmes(response.data.results.slice(0,10))
setLoading(false);
}

loadFilmes();

},[])


if (loading){

return(
    <div className='loading'>
        <h2>Carregando filmes...</h2>
        
    </div>
)

}

return(
    <div className='container'>
    <div className='lista-filmes'>
{filmes.map((filme)=>{

return(
    <article key={filme.id}>
    <strong >{filme.title}</strong>
    <img className='img__inicio' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
    <Link className='acessar' to={`/filme/${filme.id}`}>Acessar</Link>
    </article>

)
})}
    </div>
     </div>
)
}

export default Home;