import React, { Component, createRef } from "react";
import CustomInput from "./Components/FormElements/CustomInput";
import P from "./P";
import Klid from "./Klid";


class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      duedate: "",
      owner: "",
      showFocusButton: false
    };

    this.CustomInputRef = createRef();
  }

  focusInputRef = () => {

    this.CustomInputRef.current.focus();
  }

  projectHandler = (e, key) => {
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  };


  render() {
    return (
      <div>
        <h1>ProjectCreate</h1>
        <br></br>
        <CustomInput
          customRef={this.CustomInputRef}
          showFocusButton={this.state.showFocusButton}
          focusInput={this.focusInputRef}
        />
        <br></br>
        <br></br>
        <br></br>

        Name:{" "} <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.projectHandler(e, "name");
          }}

        />

        <br />
        <br />
        Duedate:{" "}
        <input
          type="text"
          value={this.state.duedate}
          onChange={(e) => {
            this.projectHandler(e, "duedate");
          }}

        />
        <br />
        <br />
        Owner:{" "}
        <input
          type="text"
          value={this.state.owner}
          onChange={(e) => {
            this.projectHandler(e, "owner");
          }}

        />
        <br />
        <button
          type="button"
          onClick={() => {
            console.log(this.state);
            alert("submitted");
          }}
        >
          submit
        </button>
        <br />
        <h1 >Click for search same Names</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Klid />
        <P />


      </div>
    );
  }
}

export default Project;