import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import AccountCreate from "./AccountCreate";
import { UserConsumer } from "./UserContext";
import CustomInput from "./Components/FormElements/CustomInput";
class Account extends Component {
  constructor(props) {
    super(props);
    
    this.AccountRef = React.createRef();
   
  }
  
  inputUpdateRef = () =>{
      const v = this.AccountRef.current.value
      const v1 = v + "here"
      console.log(v1)
  }
  render() {
    return (
      <Router>

        <ul>
          <li>
            <Link to="/AccountCreate">AccountCreate</Link>
          </li>
        </ul>
        <table style={{ width: "100%", border: "1px solid #ccc" }}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Name</th> 
              <th style={styles.headerCell}>Lastname</th>
              <th style={styles.headerCell}>Email</th>
            </tr>
          </thead>
          <tbody>
            <UserConsumer>
              {(A) => {
                
                return A.map((item) => (
                  <tr key={item.name}>
                    <td style={styles.dataCell}>{item.name}</td>
                    <td style={styles.dataCell}>{item.lastname}</td>
                    <td style={styles.dataCell}>{item.gmail}</td>
                  </tr>
                ));
              }}
            </UserConsumer>
          </tbody>
        </table>

        <Switch>
          <Route path="/AccountCreate" >
            <AccountCreate AccountRef={this.AccountRef} inputUpdate={this.inputUpdateRef} 
            />
          </Route>
        </Switch>
        
      </Router>
      
    );
  }
}

const styles = {
  headerCell: {
    backgroundColor: "gold",
    padding: "8px",
    fontWeight: "bold",
    textAlign: "left",
  },
  dataCell: {
    padding: "8px",
    borderBottom: "1px solid #ccc",
  },
};

export default Account;
