/** @format */

import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    fullname: "",
    number: "off",
    lcl:"off",
    ucl:"off",
    sym:"off"
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullname") {
      this.setState({ [name]: value });
    } else if (name === "number") {
      let number = this.state.number === "on" ? "off" : "on";
      this.setState({ number });
    }
    else if(name==="lcl"){
        let lcl = this.state.lcl === "on" ? "off" : "on";
        this.setState({ lcl });
    }
    else if(name==="ucl"){
        let ucl = this.state.ucl === "on" ? "off" : "on";
        this.setState({ ucl });
    }
    else if(name==="sym"){
        let sym = this.state.sym === "on" ? "off" : "on";
        this.setState({ sym });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Password Generator</h1>
        <div className="name">
          <label htmlFor="">Your Name </label>
          <input
            type="text"
            name="fullname"
            onChange={this.handleChange}></input>
        </div>
        <div className="include">
          <div>
            <label htmlFor="">Numbers</label>
            <input
              type="checkbox"
              name="number"
              onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="">Lower Case Letters</label>
            <input
              type="checkbox"
              name="lcl"
              onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="">Upper Case Letters</label>
            <input
              type="checkbox"
              name="ucl"
              onChange={this.handleChange}></input>
          </div>
          <div>
            <label htmlFor="">Symbol</label>
            <input
              type="checkbox"
              name="sym"
              onChange={this.handleChange}></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
