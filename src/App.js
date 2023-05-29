import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-dom"
import AccountCreate from './AccountCreate';
import Account from './Account';
import { UserConsumer } from "./UserContext";
import { UserProvider } from "./UserContext";
import CustomInput from "./Components/FormElements/CustomInput";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state1 = [{
      name: "aryana",
      lastname: "rasteh",
      gmail: "aryana2003@gmail.com"
    }];
  }
  
   render(){
    return( 
     
    
      <UserProvider value={this.state1}>
      <Router>
         
      
      
    
      
   
        <ul>
          <h1 style={{backgroundColor:"pink", width:"150px"}} > Welcome To My Website </h1>

        
  
          <br></br>
           <li>
            <Link to='/'  >Home</Link>
           </li>
          
            </ul>
        <ul>
            <li>
             <Link to='/Account' >Account</Link>
            </li>
         </ul>
    
        
         <Switch>
      
         
         <Route path='/Account' ><Account/></Route>
         </Switch>
       
      </Router>
      </UserProvider> 
      
    )
   
  }
}
  export default App