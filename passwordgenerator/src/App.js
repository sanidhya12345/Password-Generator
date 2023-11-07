import './App.css'
import { useState } from 'react'
export const App=()=>{
    const [fullname,setName]=useState('');
    const handleName=(e)=>{
        e.preventDefault();
        setName(e.target.value);
    }
    const [click,setClick]=useState("false");
    const handleClick=(e)=>{
        e.target.value==='on'?setClick("true"):setClick("false");
    }
    return(
        <div>
            <h1>Password Generator</h1>
            <div className='name'>
                <label htmlFor=''>Your Name </label>
                <input type='text' name='fullname' onChange={handleName}></input>
                <label htmlFor=''>Click Me</label>
                <input type='checkbox' name='click' onChange={handleClick}></input>
                <h1>{click}</h1>
            </div>
        </div>
    )
}