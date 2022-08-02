import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }
   
    
  }

  componentDidUpdate(prevProps,preState,snapshot){
          console.log('componentDidUpdate',preState.count,this.state.count);
          if(preState.count===this.state.count){
            alert('data isa already same')
          }
  }
  render() {
    // console.log('render');
    return (
      <div>
      <h1>Component Did Update{this.state.count}</h1>
      <button onClick={()=> {this.setState({count:1})}}>updatename</button>
      </div>
    );
  }
}

export default App;
