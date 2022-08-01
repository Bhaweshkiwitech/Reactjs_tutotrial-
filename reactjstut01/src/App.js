import PropTypes from "prop-types";
import React, { Component } from "react";
import User from "./User";
export default class extends Component {
  constructor() {
    super(); //we use super because we use parent class Component (hindi me component ka use karne ke liye ham super() call karte hai)
    this.state = { data: "bhawesh" };
    //never call API in constructor
  }
  
  render() {
    return (
      <div>
        <h1>HELLO THERE! {this.state.data}</h1>
        <User />
      </div>
    );
  }
}
