import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
    return (
      <header className='cabecalho'>
      <Link className='logo' to={'/'}>Prime Flix</Link>
      <Link className='favoritos' to={'/favoritos'}> Meus filmes</Link>

      </header>
      
    );
  }
  
  export default Header;