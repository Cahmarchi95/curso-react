import React, {Component} from 'react';
import Feed from './components/Feed';

class Listas extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, username: "Caroline", curtidas:10, comentarios:2},
                {id: 2, username: "Matheus", curtidas:120, comentarios:24},
                {id: 3, username: "Mariane", curtidas:30, comentarios:12},
                {id: 4, username: "Felipe", curtidas:1, comentarios:1},
            ]
        } ;
    }

   
    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                       <Feed id={item.id} curtidas={item.curtidas} comentarios={item.comentarios} username={item.username}/>
                    )
                })}
                
            </div>
        )
    }

}

export default Listas;