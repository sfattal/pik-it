import React, { Component } from "react";
import Container from "../components/Container/index"
import "./pages.css"



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
    <div id="editPage">
      <Container > 
        <div class="row">
          <div class="col-12">
            <h1> Edit Choosey </h1>
          </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default Edit;