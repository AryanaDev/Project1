import React, { Component } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class AccountCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastname: "",
      gamil: "",
      roll: "",
      number: "",
      adress: ""

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

  test = (lastname) => {
    console.log(lastname)
  }



  render() {
    const { AccountRef, inputUpdate, v } = this.props



    return (

      <form >
        <h1 > CREATE ACCOUNT</h1>
        <br></br>
        <br></br>
        Name :    <input type="text" ref={AccountRef} onBlur={() => inputUpdate(v)} defaultValue={"name"} />
        <br></br>
        <br></br>
        LastName :  <input type="text" value={this.state.lastname} onChange={(e) => { this.handleInputChange1(e, "lastname") }} />
        <br></br>
        <br></br>
        Gmail :   <input type="text" value={this.state.gamil} onChange={(e) => { this.handleInputChange1(e, "gmail") }} />
        <br></br>
        <br></br>
        roll :   <input type="text" value={this.state.roll} onChange={(e) => { this.handleInputChange1(e, "roll") }} />
        <br></br>
        <br></br>
        Number   <input type="text" value={this.state.number} onChange={(e) => { this.handleInputChange1(e, "number") }} />
        <br></br>
        <br></br>



        <button type="button" onClick={() => {
          console.log(this.state)

          alert("submitted")
        }} >submit </button>


        <ul>
          <li>

            <Link to="/Project" >ProjectCreate</Link>
          </li>
        </ul>





      </form>

    )
  }
}

export default AccountCreate