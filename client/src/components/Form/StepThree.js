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
        <div className='row'>
          <div className='col-6'>
            <label>Choose a date and time to end this pik-it</label>
          </div>
          <div className='col-6'>
            <Datetime onChange={() => this.props.next(this.state)}/>
          </div>
        </div>  
      </div>
    )
  }
}
