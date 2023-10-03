import { Component } from "react";

class Equipe extends Component{
  render(){
    return(
      <div>
       <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
       <hr/>
      </div>
    )
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá, sou(a) {this.props.nome}</h2>
        <h2>cargo: {this.props.cargo}</h2>
        <h2>idade: {this.props.idade} anos</h2>
      </div>
    )
  }
}


function App() {
  return (
   <div>
    <h1>Conheça nossa equipe:</h1>
    <Equipe nome="Caroline" cargo="Fullstack Developer" idade="28"/>
    <Equipe nome="Pedro" cargo="Designer" idade="30"/>
    <Equipe nome="Juliana" cargo="Gerente" idade="38"/>

   </div>
  );
}

export default App;
