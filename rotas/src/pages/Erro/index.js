import {Link} from 'react-router-dom'


function Erro() {
  return (
    <div>
        <h2>Ops parece que essa página não existe :/ </h2>
        <Link to='/'>Voltar para Home</Link><br/><br/>
        <Link to='/sobre'>Ir para Sobre</Link><br/><br/>
        <Link to='/contato'>Ir para Contato</Link>


    </div>
  )
}

export default Erro