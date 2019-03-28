import React from 'react'
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
      <div>
        <label>Choose a date and time to end this pik-it</label>
        <Datetime/>
      </div>
  )
  }
}
