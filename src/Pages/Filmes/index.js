import{useState, useEffect} from 'react';
import{useParams, useNavigate} from 'react-router-dom';
import './filme.css';
import{ toast } from "react-toastify";
import api from '../../services/api';

function Filme(){
const { id } = useParams();
const navegate = useNavigate();
const[filme, setFilme] = useState({});
const[loading, setLoading] = useState (true);

useEffect(()=>{

async function loadFilme(){
await api.get(`/movie/${id}`,{
params:{
    api_key:'5041182d4efc5683067f5cc54631a157',
    language:'pt-BR',
}

})
.then((response)=>{

setFilme(response.data)
setLoading(false);
})
.catch(()=>{
    console.log("Filme não encontrado");
    navegate("/",{replate:true})
    return;
})
}

loadFilme();


 return()=>{
 console.log("O componente foi desmontado")
 }

},[navegate, id])

function salvarFilme (){

    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id)

    if(hasFilme){
       toast.warn("Você ja possui esse filme ")
        return;
    }
        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo !!")
    }



if(loading){
return(
<div className='info-filme'> 
<h2>Estamos carregando os detalhes do filme...</h2>
</div>
)
}

    return(
        <div className='filme-info'>
            <h1 >{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            
            <h3>Sinopise</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>
          
            <div className='area-buttons'>
                <button onClick={salvarFilme} className='salvar' >Salvar </button>
                <button  className='trailer'>
                <a target="blank" rel="external" href={`https:youtube.com.br/results?search_query=${filme.title} Trailer`}>Trailer
                </a>
                </button>
            </div>          
        </div>
        
    )
    }
    
    export default Filme;