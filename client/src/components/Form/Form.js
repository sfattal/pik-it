import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import AddChoice from './AddChoice'
const axios = require('axios')
// axios.defaults.withCredentials = true;

export class Form extends React.Component {
  constructor () {
    super()
    this.state = { 
      title: '', 
      desc: '',
      email: '',
      choice: '',
      choices: [],
      date: new Date(),
      page: 1 // default form to step 1
    }
    // Bind changes to state to this scope
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleDescChanged = this.handleDescChanged.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleChoiceChanged = this.handleChoiceChanged.bind(this);
    this.handleChoicesChanged = this.handleChoicesChanged.bind(this);
    this.handleDateChanged = this.handleDateChanged.bind(this);
  }

  // Conditional Render Function - evaluates required fields to set page state (corresponding to form steps)
  setPageNext = () => {
    if (this.state.title === '' || this.state.email === '') {
      this.setState({page: 1})
    }
    else if (this.state.choices.length < 2) {
      this.setState({page: 2})
    }
    else {
      this.setState({page: 3})
    }
  }

  setPageBack = () => {
    this.setState({page: this.state.page - 1})
  }

  // IF Function rendering each step of the form based on page state
  renderPage = () => {
    console.log(this.state.page)
    if (this.state.page === 1) {
      return(
        <StepOne 
          setPageNext={this.setPageNext}
          renderPage={this.renderPage}
          handleTitleChanged={this.handleTitleChanged} 
          handleDescChanged={this.handleDescChanged} 
          handleEmailChanged={this.handleEmailChanged}
          title={this.state.title}
          desc={this.state.desc}
          email={this.state.email}
          page={this.state.page}
        />
      )
    }
    else if (this.state.page === 2) {
      return(
        <StepTwo 
          setPageNext={this.setPageNext}
          setPageBack={this.setPageBack}
          renderPage={this.renderPage}
          choice={this.state.choice}
          choices={this.state.choices}
          emptyString={this.emptyString} 
          duplicateChoice={this.duplicateChoice} 
          addChoice={this.addChoice} 
          handleChoiceChanged={this.handleChoiceChanged}
          handleChoicesChanged={this.handleChoicesChanged}
          renderAddChoices={this.renderAddChoices}
        />
      )
    }
    else if (this.state.page === 3) {
      return( 
        <StepThree 
          setPageNext={this.setPageNext}
          setPageBack={this.setPageBack}
          renderPage={this.renderPage}
          handleDateChanged={this.handleDateChanged}
          date={this.state.date}
          submit={this.submit}
        />
      )
    }
  }

  // Step One Function(s)
  handleTitleChanged (event) {
    this.setState({title: event.target.value})
  }

  handleDescChanged (event) {
    this.setState({desc: event.target.value})
  }

  handleEmailChanged (event) {
    this.setState({email: event.target.value})
  }

  // Step Two Function(s)
  emptyString(){
    alert("please enter a string");
  }

  duplicateChoice = () => {
    alert('you have entered a duplicate value, please re-enter another choice')

  }

  addChoice = () => {
    var {choice, choices} = this.state;

    if (choice === "") {
      this.emptyString(); 
    }
    else if (choices.includes (choice)) { 
      this.duplicateChoice();
    }
    else {
      const newChoices = [...choices, choice]
      this.setState({choices: newChoices, choice: ""})
    }
  }

  deleteChoice = () => {
      console.log('delete choice')
  }

  handleChoiceChanged (event) {
    this.setState({choice: event.target.value})
  }

  handleChoicesChanged (event) {
    this.setState({choices: event.target.value})
  }

  renderAddChoices = () => {
    console.log(this.state)
    return this.state.choices.map(choice => {
      return <AddChoice choice={choice} deleteChoice={this.deleteChoice}/>
    })
  }

  // Step Three Function(s)
  handleDateChanged (event) {
    this.setState({date: event.target.value})
    console.log(this.state)
  }

  submit = () => {

    var headers = {
      'Access-Control-Allow-Origin': '*',
    }
    axios.post("http://localhost:3001/api/sendPollData", JSON.stringify({
      poll_name : this.state.title,
      poll_key : "123",
      poll_description: this.state.desc,
      poll_expiration: this.state.date
    }), {"headers": headers} )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  // Call renderPage function in component render function
  render () {
    return (
      <div>
        {this.renderPage()}
      </div>
    )
  }
}
