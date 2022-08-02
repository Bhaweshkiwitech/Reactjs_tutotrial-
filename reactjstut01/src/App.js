import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(){
    super();
    this.state={
      name:'bhawesh'
    }
    console.log('constructor')
  }

  componentDidMount(){
    console.log("componentDidMount")
  }
  render() {
    console.log('render');
    return (
      <div>
      <h1>Component Did Mount {this.state.name}</h1>
      <button onClick={()=> this.setState({name:'Devesh'})}>updatename</button>
      </div>
    );
  }
}

export default App;
