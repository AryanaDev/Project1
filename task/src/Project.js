import React, { Component } from "react";
import {Switch,Route,Link,BrowserRouter as Router,} from "react-router-dom"
import Account from './Account';
import App from "./App";

class Project extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            duedate:"",
            owner:""
        }
    }
        ProjectHandler = (e,key) => {
            const value = e.target.value
             console.log(value)
             console.log(key)
             const newState =  this.state
           this.setState({
            ...newState,
        [key]: value
           })
        }
       
    
    Prj = (name) => {
        console.log(name)
      }
    render(){
        return(
            <div>
                <h1 style={{backgroundColor:"red", width:"200px"}}>ProjectCreate</h1>
                   Name :  <input style={{backgroundColor:"Purple", width:"150px"}} type="text" Value={this.state.name} onChange={(e) =>{ this.ProjectHandler(e, "name") }} defaultValue={"Name"} />
                <br></br>
                <br></br>
                   Duedate :  <input style={{backgroundColor:"yellow", width:"150px"}} type="text" Value={this.state.duedate} onChange={(e) =>{ this.ProjectHandler(e, "duedate") }} defaultValue={"Duedate"} />
                <br></br>
                <br></br>
                   Owner :  <input  style={{backgroundColor:"orange", width:"150px"}} type="text" Value={this.state.owner} onChange={(e) =>{ this.ProjectHandler(e, "owner") }} defaultValue={"Owner"} />
                <br></br>
                <button type="button" onClick={() =>{
              console.log(this.state)
              alert("submitted")
            }} >submit </button> 
            
            
            </div>
        )
    }
}
export default Project