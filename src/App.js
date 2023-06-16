import React from "react";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import Account from "./Account";
import { UserProvider } from "./UserContext";
import Project from "./Project";
import AccountCreate from "./AccountCreate";
import User2 from "./User2";
import CreateUser from "./CreateUser";
import Modal from "./Modal";
import UniversityForm from "./UniversityForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state1 = [{
      name: "aryana",
      lastname: "rasteh",
      gmail: "aryana2003@gmail.com"
    }];
  
    this.state = {
      ModalOpen: false,
    };
     this.state12= {check : false}
  }
 

  componentDidMount() {
    setInterval((prevState) => {
      this.setState(({
      check : false
      }));
      console.log(this.state12.check === false? "Parent component rendered" : true);
    }, 3000);
    
  }

  openModal = () => {
    this.setState({ ModalOpen: true });
  };

  closeModal = () => {
    this.setState({ ModalOpen: false });
  };

  render() {
    
    return (
      <UserProvider value={this.state1}>
        <div>
        
          <button onClick={this.openModal}>Open Modal</button>
          <button onClick={this.closeModal}>Close Modal</button>

          {this.state.ModalOpen && (
            <Modal
              title="Cristiano Ronaldo"
              content="Cristiano Ronaldo, in full Cristiano Ronaldo dos Santos Aveiro, (born February 5, 1985, Funchal, Madeira, Portugal), Portuguese football (soccer) forward who was one of the greatest players of his generation.

              Early life and career
              Ronaldo’s father, José Dinis Aveiro, was the equipment manager for the local club Andorinha. (The name Ronaldo was added to Cristiano’s name in honour of his father’s favourite movie actor, Ronald Reagan, who was U.S. president at the time of Cristiano’s birth.) At age 15 Ronaldo was diagnosed with a heart condition that necessitated surgery, but he was sidelined only briefly and made a full recovery. He first played for Clube Desportivo Nacional of Madeira and then transferred to Sporting Clube de Portugal (known as Sporting Lisbon), where he played for that club’s various youth teams before making his debut on Sporting’s first team in 2002."
              state12={this.state.state12}
            />
          )}
        </div>
        <Router>
          <ul>
            <h1> Welcome To My Website </h1>
            <br />
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Account">Account</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/Account" component={Account} />
            <Route path="/AccountCreate" component={AccountCreate} />
            <Route path="/Project" component={Project} />
            <Route path="/User2" component={User2} />
            <Route path="/CreateUser" component={CreateUser} />
          </Switch>
        </Router>
        <UniversityForm/>
      </UserProvider>
    );
  }
}

export default App;
