import React, {Component} from 'react';

class Condicional extends Component{

    constructor(props){
        super(props);
        this.state = { 
            status: false
        
        };
    }

   
    render(){
        return(
            <div>
                {this.state.status ?
                <div>
                    <h2>Bem-vindo ao sistema</h2>
                    <button onClick={()=> {this.setState({status: false})}}>Sair</button>
                </div> :
                <div>
                    <h2>Faça o login</h2>
                    <button onClick={()=> {this.setState({status: true})}}>Fazer o login</button>
                </div>
                
                }
                <div>
                    <h2>Curso React Js</h2>
                </div>
            </div>
        )
    }

}

export default Condicional;