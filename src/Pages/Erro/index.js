import{ Link } from 'react-router-dom'
import './erro.css';
function Erro(){

    return(
        <div className='not-found'>
            <h1>Error 404</h1>
            <h2>Desculpe, essa página não existe...</h2><br/>
            <Link to={"/"}>Inicio</Link>
           
        
        </div>
    )
    }
    
    export default Erro;