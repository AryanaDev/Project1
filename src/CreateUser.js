import React, { Component } from "react"

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      lastname: ""
    }
  }
  handleInputChange1 = (e, key) => {
    const value = e.target.value
    console.log(value)
    console.log(key)
    const oldState = this.state
    this.setState({
      ...oldState,
      [key]: value
    })

  }
  render() {
    return (
      <div>
        <h1 > Submit User</h1>
        Name :  <input type="text" value={this.state.name} onChange={(e) => { this.handleInputChange1(e, "name") }} />
        <br></br>
        <br></br>
        LastName :  <input type="text" value={this.state.lastname} onChange={(e) => { this.handleInputChange1(e, "lastname") }} />
        <br></br>
        <br></br>
        <button type="button" onMouseOver={() => {
          console.log(this.state)

          alert("submitted")
        }} >submit </button>
      </div>

    )

  }

}


export default CreateUser