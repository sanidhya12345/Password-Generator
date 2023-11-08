/** @format */

import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    fullname: "",
    click: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullname") {
      this.setState({ [name]: value });
    } else if (name === "click") {
      let click = this.state.click === "on" ? "off" : "on";
      this.setState({ click });
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
        <div>
            
        </div>
      </div>
    );
  }
}

export default App;
