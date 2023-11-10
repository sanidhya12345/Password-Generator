/** @format */

import "./App.css";
import React, { Component } from "react";
let outputs=new Set([]);
const numbers=[0,1,2,3,4,5,6,7,8,9];
const symbols=['@','!','#','%','$','^','&','*'];
const PasswordPrint=(props)=>{
  const style={
    width:'600px',
    height:'100px',
    backgroundColor:'#ff3'
  }
  return(
    <div style={style}>
      <h1>{props.data}</h1>
    </div>
  )
}
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
class App extends Component {
  state = {
    fullname: "",
    number: "off",
    lcl:"off",
    ucl:"off",
    sym:"off",
    password:"",
    click:false
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
  handleClick=()=>{
    this.setState({click:!this.state.click});
  }
  render() {
    if(this.state.number==='on'){
      outputs.add("numbers");
    }
    if(this.state.sym==='on'){
      outputs.add("symbols");
    }
    let comp;
    if(this.state.click){
      comp=<PasswordPrint data={123}></PasswordPrint>
    }
    const style={
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'60px'
    }
    console.log(outputs);
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
          <button type="button" onClick={this.handleClick}>Generate</button>
        </div>
        <div style={style}>
          {comp}
        </div>
      </div>
    );
  }
}
export default App;
