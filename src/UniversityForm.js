import React, { Component } from "react";
import axios from "axios";

class UniversityForm extends Component {
  constructor() {
    super();
    this.state = {
      university: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        this.setState({
          university: response.data,
        });
        console.log(response.data);
      });
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>State-Province</th>
            </tr>
          </thead>
          <tbody>
            {this.state.university.map((university) => (
              <tr key={university.name}>
                <td>{university.name}</td>
                <td>{university.country}</td>
                <td>{university["state-province"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default UniversityForm;
