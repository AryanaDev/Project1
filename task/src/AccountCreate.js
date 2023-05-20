import React, { Component } from "react";
import {Switch,Route,Link,BrowserRouter as Router,} from "react-router-dom"
import Account from './Account';
import App from "./App";
import Project from "./Project";
import CustomInput from "./Components/FormElements/CustomInput";
class AccountCreate extends Component{
    constructor(props){
        super(props)
     
        this.state ={
          lastname:"",
          gamil:"",
          roll:"",
          number:"",
          adress:""
          
        }
    }
   

    handleInputChange1 = (e, key) => {
      const value = e.target.value
      console.log(value)
      console.log(key)
      const oldState = this.state
      this.setState({
        ...oldState,
        [key]: value
       })
       
    }

    test = (lastname) => {
      console.log(lastname)
    }
  
   
        
    render(){
      const {AccountRef,inputUpdate,state7} = this.props
      
      

        return(
          
            <form ><h1 style={{backgroundColor:"blue", width:"150px"}} > CREATE ACCOUNT 
        
            </h1>
             <br></br>
                <br></br>
               Name :    <input  type="text" ref={AccountRef} onChange= {(e) => {this.props.inputUpdate(e,"name")}} value={this.props.state7}  defaultValue={"Name"}/>
                <br></br>
                <br></br>
                LastName :  <input style={{backgroundColor:"purple", width:"150px"}} type="text" Value={this.state.lastname} onChange={(e) => {this.handleInputChange1(e,"lastname")}} defaultValue={"LastName"}/>
                <br></br>
                <br></br>
               Gmail :   <input  style={{backgroundColor:"pink", width:"150px"}} type="text" Value={this.state.gamil} onChange={(e) => {this.handleInputChange1(e,"gmail") }} defaultValue={"Gmail"}/>
                <br></br>
                <br></br>
                roll :   <input style={{backgroundColor:"red", width:"150px"}} type="text" Value={this.state.roll} onChange={(e) => {this.handleInputChange1(e,"roll")}} defaultValue={"Rol"}/>
                <br></br>
                <br></br>
               Number   <input style={{backgroundColor:"green", width:"150px"}} type="text" Value={this.state.number} onChange={(e) => {this.handleInputChange1(e,"number")}} defaultValue={"Number"}/>
                <br></br>
                <br></br> 
                
               
                
                <button style={{backgroundColor:"pink", width:"200px"}} type="button" onClick={() =>{
              console.log(this.state,this.props.state7)

              alert("submitted")
            }} >submit </button> 
                    <Router>
                 
                 <ul>
                 <li>
                 
                  <Link to= "/Project" >ProjectCreate</Link>
                 </li>
              </ul>
              
              <Switch> 
               <Route path="/Project" ><Project/></Route>
               </Switch>
               
             </Router>
            
            </form>
            
        )
    }
}

export default AccountCreate