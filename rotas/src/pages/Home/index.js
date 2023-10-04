
import {Link} from 'react-router-dom';

function Home() {
    return (
    <div>
        <h1>Bem vindo a pagina HOME</h1>

        <Link to='/sobre'>Sobre</Link><br/><br/>
        <Link to='/contato'>Contato</Link>

        <hr/>

        <Link to='/produto/7890'>Acessar produto 7890</Link>

    </div>
    );
  }
  
  export default Home;
  