import React, { Component,createRef} from 'react';

class App extends Component {
  constructor(props){
    super()
    this.inputRef=createRef()
  }

  componentDidMount() {
    // console.log(this.inputRef.current.value='1000')
  }
  getVal(){
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color='red'
    
  }
  render() {
    return (
      <>
        <h1>Ref in Reactjs</h1>
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=>this.getVal()}>Click Me </button>
        </>
    );
  }
}

export default App;