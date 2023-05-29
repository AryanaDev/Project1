import React from "react";
import nameList from "./nameList";

class Klid extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.prp}>Check it</button>
      </div>
    );
  }
}



export default nameList(Klid);
