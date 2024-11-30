import './App.css'
import React from 'react'
import Sad from './Sad.png'; 
import happy from './happy.png'; 
class ToggleMode extends React.Component { 
 constructor(props) { 
 super(props);
 this.state = {pic : happy};
 this.Toggle_Mode = this.Toggle_Mode.bind(this);
 } 
 Toggle_Mode() { 
 this.setState((prevState)=>{ 
 if (prevState.pic===Sad) 
 { 
 this.mode="happy"
 return {pic : happy} 
 } 
 else if (prevState.pic===happy) 
 { 
 this.mode="Sad"
 return {pic :Sad} 
 } 
 })
 } 
 render() { 
    return ( 
    
      <div className="container1">
    
    <h1>This is output of Task2: {this.mode} </h1>
    <button onClick={this.Toggle_Mode} style = {{justifyContent: 'center', alignItems: 'center', height: '10vh', width: '150px' }}
 
    > 
    <img src={this.state.pic} alt="centered " className="center"/>
    
    </button>
    
    </div>
    );
    } 
   } 
   export default ToggleMode; 
