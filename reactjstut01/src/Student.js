import React, { Component } from "react";

class Student extends Component {
    componentWillUnmount(){
        alert('componentW')
    }
  render() {
    return (
      <div>
        <h1>Student Component</h1>
      </div>
    );
  }
}

export default Student;
