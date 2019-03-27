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

  addChoice = () => {
    var {choice, choices} = this.state;
    const newChoices = [...choices, choice]
    this.setState({ choices: newChoices, choice: "" })
  }

  handleChoiceChanged (event) {
    this.setState({choice: event.target.value})
  }
  renderAddChoices() {
    return this.state.choices.map(choice => {
      return <AddChoice poll={{description:choice}}/>
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
      </div>
    )
  }
}
