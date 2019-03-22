import React, { Component } from "react";
import Container from "../components/Container/index"
import "./pages.css"

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
       <div id="createPage">
      <Container > 
        <div class= "fluid-container">
            <div class="row">
                  <div class="col-12">
                    <h1> Create Choosey </h1>
                  </div>
            </div>
            <div class = "row pt-5"> 
                  <div class = "col-4">
                    <form> 
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter an option"/>
                      </form>
                  </div>
                  <div class="col-2">
                    <button id="addOptionBtn" type="button" class="btn btn-primary">Add</button>
                </div>
            </div>
            <div class="row pt-5">
                  <div class="col-12">

                  <button type="button" class="btn btn-primary btn-lg btn-block">Submit </button>

                  </div>
            </div>
        </div>
      </Container>
      </div>
    );
  }
}

export default Create;
