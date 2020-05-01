import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import AddChoice from './AddChoice'
import './style.css'

const metascraper = require('metascraper')([
  // require('metascraper-description')(),
  // require('metascraper-image')(),
  // require('metascraper-logo')(),
  require('metascraper-title')(),
  // require('metascraper-url')()
])

const got = require('got')


const axios = require('axios')

export class Form extends React.Component {
  constructor () {
    super()
    this.state = { 
      title: '', 
      desc: '',
      key: '',
      admin_key: '',
      email: '',
      choiceInput: '',
      choices: [],
      date: new Date(),
      page: 1 // default form to step 1
    }
    // Bind changes to state to this scope
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleDescChanged = this.handleDescChanged.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
    this.handleChoiceChanged = this.handleChoiceChanged.bind(this);
    this.handleChoiceLabelChanged = this.handleChoiceLabelChanged.bind(this)
    this.handleChoicesChanged = this.handleChoicesChanged.bind(this);
    this.handleEnter = this.handleEnter.bind(this)
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

  // NEED TO SET THIS UP TO USE PREVSTATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
          pollTitle={this.state.title}
          pollDescription={this.state.desc}
          choiceInput={this.state.choiceInput}
          choices={this.state.choices}
          emptyString={this.emptyString} 
          duplicateChoice={this.duplicateChoice} 
          addChoice={this.addChoice} 
          handleChoiceChanged={this.handleChoiceChanged}
          handleChoicesChanged={this.handleChoicesChanged}
          handleEnter={this.handleEnter}
          renderAddChoices={this.renderAddChoices}
          submit={this.submit}
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
    alert("please enter a choice!");
  }

  duplicateChoice = () => {
    alert("you have entered a duplicate choice, please re-enter a different choice")
  }

  addChoice = () => {
    var {choiceInput, choices} = this.state;
    var choicesLC = choices.map((choice) => { return choice.choiceValue.toLowerCase() })
    var choiceLC = choiceInput.toLowerCase()
    console.log(process.env)
    console.log(choicesLC)

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (choiceInput === "") {
      // this.emptyString();
      document.getElementById("submitButton").focus()
    }
    // else if (choices.includes (choice)) { 
    //   this.duplicateChoice();
    // }
    else if ( choicesLC.includes (choiceLC) ) {
      this.duplicateChoice();
    }
    // check to see if choice is link and if it is, save input as choiceValue and scrape og:title to be choiceLabel
    else if ( choiceLC.match(regex) ) {
      if (!/^https?:\/\//i.test(choiceInput)) {
          choiceInput = 'http://' + choiceInput;
      }

      ;(async () => {
        const { body: html, url } = await got('https://cors-anywhere.herokuapp.com/' + choiceLC)
        const metadata = await metascraper({ html, url })
        console.log(metadata)

        const choiceObj = {
          choiceType: "link",
          choiceValue: choiceInput,
          choiceLabel: metadata.title
        }
        const newChoices = [...choices, choiceObj]
        this.setState({choices: newChoices, choiceInput: ""})
      })()

      // const choiceObj = {
      //   choiceType: "link",
      //   choiceValue: choiceInput,
      //   choiceLabel: metadata.title
      // }
      // const newChoices = [...choices, choiceObj]
      // this.setState({choices: newChoices, choiceInput: ""})
    }
    //if choice is not a link, add it as an object to the existing choices array
    else {
      const choiceObj = {
        choiceType: "text",
        choiceValue: choiceInput,
        choiceLabel: choiceInput
      }
      const newChoices = [...choices, choiceObj]
      this.setState({choices: newChoices, choiceInput: ""})
    }
  }

  deleteChoice = (event) => {
      console.log('delete choice')
      console.log(event.target)
      const currentState = this.state.choices
      const futureState = currentState.splice(event.target.attributes.index.value, 1)
      this.setState({ choices: currentState })
  }

  handleChoiceChanged (event) {
    this.setState({choiceInput: event.target.value})
  }

  handleChoiceLabelChanged (event) {
    console.log('updating choice label')
    console.log(event.target)
    // const {value} = event.target
    const futureState = this.state.choices
    const index = event.target.attributes.index.value
    const value = event.target.attributes.value.value
    console.log(futureState)
    console.log(index, value)

  //something is going on here. value is linked to choiceLabel so when
  //I bring it into here, it's just creating a loop where it's updating choiceLabel with choiceLabel
    futureState[index].choiceLabel = event.target.value
    if (futureState[index].choiceType === "text") {
      futureState[index].choiceValue = event.target.value
    }
    console.log(futureState)
    this.setState({ choices: futureState })
  }

  handleChoicesChanged (event) {
    this.setState({choices: event.target.value})
  }

  handleEnter (event) {
    if (event.key === "Enter") {
      console.log("I hit enter!")
      if (this.choiceInput === "") {
        console.log('blank choice')
      }
      else {
        document.getElementById("add-choice").click()
      }
    }
  }

  renderAddChoices = () => {
    console.log(this.state)
    return this.state.choices.map( (choice, index) => {
      return <AddChoice 
        choice={choice} 
        index={index} 
        onChange={this.handleChoiceLabelChanged} 
        deleteChoice={this.deleteChoice}
      />
    })
  }

  // Step Three Function(s)
  handleDateChanged (event) {
    this.setState({date: event.target.value})
    console.log(this.state)
  }


  submit = (event) => {
    event.preventDefault()
    console.log('trying to send data to DB')
    function shortlink (num) { 
      var shortlink = require('shortlink');
      let randVar = shortlink.generate(num); // Random string of 8 characters, e.g. 'PJWn4T42' 
      return randVar
    }
    
    var pollKey = shortlink(8);
    var adminKey = shortlink(9)
    console.log("pollkey: " + pollKey);
    console.log("adminkey: " + adminKey);
    this.setState({
      key: pollKey,
      admin_key: adminKey
    })

    // var url = process.env.URL || 'http://localhost:3001'
    // `${url}/api/sendPollData`
    // REAL URL: 'https://pik-it.herokuapp.com/api/sendPollData'
    //local url: 'http://localhost:3001/api/sendPollData'

    axios.post("/api/sendPollData", {
      title: this.state.title,
      key : pollKey,
      admin_key: adminKey,
      description : this.state.desc,
      expiration: this.state.date,
      choices: this.state.choices
    }, {"headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Access-Control-Allow-Origin": "* "
    }})
    .then(function (response) {
      window.location.replace(`/polls/admin/${adminKey}`);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  // Call renderPage function in component render function
  render () {
    return (
      <div className ="pt-3">
        {this.renderPage()}
        {console.log(this.state)}
      </div>
    )
  }
}
