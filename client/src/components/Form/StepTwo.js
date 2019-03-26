import React from 'react'
import Container from '../Container/index'
import PollItem from '../pollitem/index'

// const choicesArray = []

// addChoice = () => {
//   var choice = $(".userChoice").val().trim();
//   choicesArray.push(choice)
// }

export class StepTwo extends React.Component {
  constructor () {
    super()
    this.state = {
      choices: []
    }
    this.handleChoicesChanged = this.handleChoicesChanged.bind(this);
  }

  handleChoicesChanged (event) {
    this.setState({choices: event.target.value})
  }

  render () {
    return (
      <Container>
        <div>
          {<PollItem poll ={{description:"example text"}}/>}
              <label>Choice</label>
              <input
                className='u-full-width required userChoice'
                placeholder='Example Choice'
                type='choice'
                onChange={this.handleChoicesChanged}
                value={this.state.choices}
                autoFocus
              />
              {/* <button onClick={addChoice}>+</button> */}
        </div>
      </Container>
    )
  }
}
