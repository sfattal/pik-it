import React from 'react'
import Container from '../Container/index'
import Datetime from 'react-datetime'

export class StepThree extends React.Component {
  constructor () {
    super()
    this.state = { 
      date: new Date()
    }
    this.handleDateChanged = this.handleDateChanged.bind(this);
  }

  handleDateChanged (event) {
    this.setState({date: event.target.value})
  }

  render () {
    return (
      <Container>
        <div>
          <label>Choose a date and time to end this Choosey</label>
          <Datetime/>
        </div>
      </Container>
    )
  }
}
