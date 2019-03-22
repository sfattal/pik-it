import React, { Component } from "react";
import Container from "../components/Container/index"

class Create extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };

 
  // detects a change when changes in the search form
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
 
  // handles the button click, as soon as the submit button is clicked

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
         <h1> Create Element </h1> 
        </Container>
      </div>
    );
  }
}

export default Create;
