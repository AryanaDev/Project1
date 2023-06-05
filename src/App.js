import React, { Component } from "react"
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import Account from "./Account";
import { UserProvider } from "./UserContext";
import Project from "./Project";
import AccountCreate from "./AccountCreate";
import User2 from "./User2";
import CreateUser from "./CreateUser";
class App extends Component {
  constructor(props) {
    super(props);
    this.state1 = [{
      name: "aryana",
      lastname: "rasteh",
      gmail: "aryana2003@gmail.com"
    }];
  }
  render() {
    return (
      <UserProvider value={this.state1}>
        <Router>
          <ul>
            <h1> Welcome To My Website </h1>
            <br></br>
            <li>
              <Link to='/Home'  >Home</Link>
            </li>
            <li>
              <Link to='/Account' >Account</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/Account" component={Account}><Account /></Route>
          </Switch>
          <Switch>
            <Route path="/AccountCreate" component={AccountCreate}>
            </Route>
          </Switch>
          <Switch>
            <Route path="/Project" component={Project} ><Project /></Route>
          </Switch>
          <Switch>
            <Route path="/User2" component={User2} ><User2 /></Route>
          </Switch>
          <Switch>
            <Route path="/CreateUser" component={CreateUser} ><Project /></Route>
          </Switch>
        </Router>
      </UserProvider>
    )
  }
}
export default App