import React, {Component} from "react";

class States extends Component{

  constructor(props){
    super(props);
    this.state ={
      nome: "Caroline",
      contador: 0 
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

  }

  increase(){
    let state = this.state;
    state.contador += 1;
    state.nome = "Miriam"
    this.setState(state)
  }

  decrease(){
    let state = this.state;

    if(state.contador === 0){
      alert("Opa chegou a zero! ");
      return;
    }

    state.contador -= 1;
    this.setState(state)
  }

  render(){
    return(
      <div>
        <h1>contador</h1>
        {this.state.nome}
        <h3><button onClick={this.decrease}>-</button> {this.state.contador} <button onClick={this.increase}>+</button></h3>
        
      </div>
    )
  }

}

export default States