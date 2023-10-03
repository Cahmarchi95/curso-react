
const Equipe = (props) =>{
  return (
    <div>
      <Sobre nome={props.nome} idade={props.idade} cargo={props.cargo}/>
      <Midias midia={props.midia}/>
      <hr/>
    </div>
  )
}

const Midias = (props) =>{
  return (
    <div>
      <a href={props.midia}>Facebook </a>
      <a  href={props.midia}>Linkedin </a>
      <a>Instagram </a>
    </div>
  )
}

const Sobre = (props) =>{
  return(
    <div>
      <h2>Olá sou o(a) {props.nome} , tenho {props.idade} anos</h2>
      <h3>e sou {props.cargo}</h3>
     
    </div>
  )
}

 function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Lucas" cargo="Programador" idade="29" midia={"https://www.google.com.br/"}/>
      <Equipe nome="Henrique" cargo="gerente" idade="35" midia={"https://www.linkedin.com/"}/>
      <Equipe nome="Caroline" cargo="designer" idade="27" midia="instagram.com"/>
    </div>
  )
}

export default App