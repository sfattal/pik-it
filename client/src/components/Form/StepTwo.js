import React from 'react'
import PollItem from '../PollItem'

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
  renderPollItems() {
    return this.state.choices.map(choice => {
      return <PollItem poll={{description:choice}}/>
    })
  }
  render () {
    console.log(this.state.choices)
    return (
      <div>
        {this.renderPollItems()}
        <label>Choice</label>
        <input
          className='u-full-width required userChoice'
          placeholder='Example Choice'
          type='text'
          onChange={this.handleChoiceChanged}
          value={this.state.choice}
          autoFocus
        />
        <button onClick={this.addChoice}>+</button>
      </div>
    )
  }
}
