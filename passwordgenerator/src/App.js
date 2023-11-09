/** @format */

import "./App.css";
import React, { Component } from "react";
let outputs=new Set([]);
const numbers=[0,1,2,3,4,5,6,7,8,9];
const symbols=['@','!','#','%','$','^','&','*'];
const randomNumberGenerator=()=>{
      let str="";
      for(let i=0;i<3;i++){
        let index=parseInt(Math.floor(Math.random()*numbers.length));
        str+=numbers[index];
      }
      return str;
}
const randomSymbolGenerator=()=>{
  let str="";
  for(let i=0;i<2;i++){
    let index=parseInt(Math.floor(Math.random()*symbols.length));
    str+=symbols[index];
  }
  return str;
}
const create=()=>{
   let num=randomNumberGenerator();
   let sym=randomSymbolGenerator();
   console.log(num+sym);
}
class App extends Component {
  state = {
    fullname: "",
    number: "off",
    lcl:'off',
    ucl:'off',
    sym:"off",
    password:""
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
    if(this.state.number==='on'){
      outputs.add("numbers");
    }
    if(this.state.sym==='on'){
      outputs.add("symbols");
    }
    console.log(this.state.password);
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
          <button type="button" onClick={create}>Generate</button>
        </div>
      </div>
    );
  }
}
export default App;
