import React from "react";
import nameList from "./nameList";

class P extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1  onMouseOver={this.props.prp}> [ Check it ] </h1>
      </div>
    );
  }
}



export default nameList(P);





