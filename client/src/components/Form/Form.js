import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import AddChoice from './AddChoice'
import './style.css'


const axios = require('axios')

export class Form extends React.Component {
  constructor () {
    super()
    this.state = { 
      title: '', 
      desc: '',
      key: '',
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
    this.submit = this.submit.bind(this);
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
    console.log(process.env)
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
    console.log(process.env)

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

  submit = (event) => {
    event.preventDefault()
    function shortlink () { 
      var shortlink = require('shortlink');
      let randVar = shortlink.generate(8); // Random string of 8 characters, e.g. 'PJWn4T42' 
      return randVar
    }
    
    console.log(this.state);
    console.log(process.env.URL)
    var pollKey = shortlink();
    console.log("pollkey: " + pollKey);
    this.setState({key: pollKey})

    // var url = process.env.URL || 'http://localhost:3001'
    // `${url}/api/sendPollData`
    // REAL URL: 'https://pik-it.herokuapp.com/api/sendPollData'
    //local url: 'http://localhost:3001/api/sendPollData'

    axios.post("/api/sendPollData", {
      title: this.state.title,
      key : pollKey,
      description : this.state.desc,
      expiration: this.state.date,
      choices: this.state.choices
    }, {"headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "* "
    }})
    .then(function (response) {
      window.location.replace(`/polls/${pollKey}`);
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
