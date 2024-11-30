import './App.css'
import React from 'react'
import like from './like.png'; 
import love from './love.png'; 
import happy from './happy.png'; 
class FacebookEmojiCounter extends React.Component 
{ 
 constructor(props) 
{ 
 super(props);
 this.state = {number : 0};
 this.increment = this.increment.bind(this);
 this.pic=null
 if (this.props.type==="love") 
 this.pic=love
 else if (this.props.type==="like") 
 this.pic=like
 else if (this.props.type==="happy") 
 this.pic=happy
 } 
 
increment() { 
 this.setState((prevState)=>{ 
    return {number : prevState.number+1} 
 })
 } 
 render() { 
 return ( 
 <div className="container">
 <h1>It is {this.state.number}{this.props.type}.</h1>
 <button onClick={this.increment} style={{justifyContent: 'center', alignItems: 'center', height: '10vh', width: '150px' }}> 
 
 <img src={this.pic} alt="centered " className="center"  />
 
 <b>{this.state.number} </b>
 </button> 
 </div>
 );
 } 
} 
export default FacebookEmojiCounter;
