import React, { Component } from "react";
import axios from "axios";
class UniversitySignup extends Component {
    constructor() {
        super()
        this.state = {
            name: " ",
            stateprovince: " ",
            country: " "
        }
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://universities.hipolabs.com/search?country=United+States", this.state)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>UniversitySignup</h1>
                <div>
                    <br></br>
                    University name : <input type="text" name="name" onChange={this.changeHandler} value={this.state.name} />
                </div>
                <br></br>
                <br></br>
                <div>
                    stateprovince  : <input type="text" name="stateprovince" onChange={this.changeHandler} value={this.state.stateprovince} />
                </div>
                <br></br>
                <br></br>
                <div>
                    country : <input type="text" name="country" onChange={this.changeHandler} value={this.state.country} />
                </div>
                <br></br>
                <button type="submit">save</button>
            </form>
        )
    }
}
export default UniversitySignup