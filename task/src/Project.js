import React, { Component, createRef } from "react";
import CustomInput from "./Components/FormElements/CustomInput";

class Project extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "",
      duedate: "",
      owner: "",
      showFocusButton: true
    };

    this.CustomInputRef = createRef();
  }

  focusInputRef = () => {
    this.CustomInputRef.current.focusInput();
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
        <CustomInput
          ref={this.CustomInputRef}
          showFocusButton={this.state.showFocusButton}
        />
        
        <h1 style={{ backgroundColor: "red", width: "200px" }}>ProjectCreate</h1>
        Name:{" "}
        <input
          style={{ backgroundColor: "Purple", width: "150px" }}
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.projectHandler(e, "name");
          }}
          defaultValue={"Name"}
        />
        <br />
        <br />
        Duedate:{" "}
        <input
          style={{ backgroundColor: "yellow", width: "150px" }}
          type="text"
          value={this.state.duedate}
          onChange={(e) => {
            this.projectHandler(e, "duedate");
          }}
          defaultValue={"Duedate"}
        />
        <br />
        <br />
        Owner:{" "}
        <input
          style={{ backgroundColor: "orange", width: "150px" }}
          type="text"
          value={this.state.owner}
          onChange={(e) => {
            this.projectHandler(e, "owner");
          }}
          defaultValue={"Owner"}
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
        <button type="button" onClick={this.focusInputRef}>
          Focus Input
        </button>
      </div>
    );
  }
}

export default Project;
