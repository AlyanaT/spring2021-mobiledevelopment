import { Component } from "react"

import react, {Component} from 'react'

class lunges extends Component{
    constructor(props){
        super(props);
        this.state= {
            StartLunges: 0
        }
    }

    render(){                                                                             
        return(
            <div>
               <h2>Start lunges: {this.state.StartLunges}</h2>
               <button onclick={()=>this.setState({lunges: this.state.lunges + 1})}>+1 lunge</button>
            </div>
        )
    
    export default lunges;

}
}

