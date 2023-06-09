import React, { Component } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { UserConsumer } from "./UserContext";

class Account extends Component {
  constructor(props) {
    super(props);

    this.AccountRef = React.createRef();
  }

  inputUpdateRef = () => {
    this.AccountRef.current.value = "here" + this.AccountRef.current.value
  }

  render() {
    return (
      <>

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
      </>
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
