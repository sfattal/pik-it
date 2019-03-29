import React from 'react'
import AddChoice from '../AddChoice'

export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
      choice: "",
      choices: []
    }
    this.handleChoiceChanged = this.handleChoiceChanged.bind(this);
  }

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

  

  // deleteChoice = () => {
  //     // function that removes the choice from the array
  // }

  handleChoiceChanged (event) {
    this.setState({choice: event.target.value})
  }

  renderAddChoices() {
    return this.state.choices.map(choice => {
      return <AddChoice choice={{name:choice}}/>
      // deleteChoice={{this.deleteChoice}}
    })
  }

  render () {
    console.log(this.state.choices)
    return (
      <div>
        {this.renderAddChoices()}
        <label>Choice</label>
        <div className='row'>
          <div className='col-11'>
            <input
              className='u-full-width required userChoice'
              placeholder='Example Choice'
              type='text'
              onChange={this.handleChoiceChanged}
              value={this.state.choice}
              autoFocus
            />
          </div>
          <div className='col-1'>
            <button onClick={this.addChoice}>+</button>
          </div>
          
          
        </div>
        <button
            style={this.props.buttonState.showNextBtn ? {} : { display: 'none' }}
            onClick={() => this.props.next(this.state)}
          >
            Next
          </button>
      </div>
    )
  }
}

export default StepTwo
