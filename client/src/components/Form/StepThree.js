import React from 'react'
import Datetime from 'react-datetime'

function StepThree(props) {
  console.log(props)
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

export default StepThree
