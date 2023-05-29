import React, { Component } from "react";
import Project from "./Project";

const nameList = (WrappedComponent) => {
  class NameList extends Component {
    constructor() {
      super();
      this.state = {
        names: [
          "aryana",
          "emilia",
          "asghar",
          "akbar",
          "ahmad",
          "ahmad",
          "ahmad",
          "aryana",
          "taghi",
          "taghi",
          "taghi",
          "naghi",
          "arshia",
          "aryana",
          "nasrin",
          "aryana",
          "samin",
          "tarlan",
          "fariborz",
          "tarlan",
          "tarlan",
          "emilia",
          "emilia"
        ],
      };
    }

    stateHandler() {
      const nameMesl = {};
      this.state.names.filter((name) => {
        (name in nameMesl)?  nameMesl[name]++  :  nameMesl[name] = 1;
 
      });

      Object.entries(nameMesl).filter(([name, nmsl]) => {
        if (nmsl > 1) {
          console.log(`${name}: بار تکرار شده ${nmsl}`);
        }
      });
    }

    render() {
      return <WrappedComponent prp={this.stateHandler.bind(this)} />;
    }
  }

  return NameList;
};

export default nameList;
