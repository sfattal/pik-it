import React, { Component } from "react";
import Container from "../components/Container/index"



class Edit extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  


  // renders the make new friends, swipe to meet the puppy, matched the number of pups and the alert 
  // the card component is externally loaded (will find in Card folder)

  render() {
    return (
      <div>
    <Container > 
        <h1> Edit Page </h1>
    </Container>
      </div>
    );
  }
}

export default Edit;