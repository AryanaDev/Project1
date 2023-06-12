import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

class User2 extends Component {
  render() {
    return (
      <div>
        
        <table>
          <thead>
            <tr>
              <th>User 1</th>
              <th>User 2</th>
              <th>User 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            <Link to='/CreateUser' >CreateUser</Link>
          </li>
        </ul>
      </div>
      
    )
  }
}
export default User2