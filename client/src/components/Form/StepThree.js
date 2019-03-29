import React from 'react'
import Datetime from 'react-datetime'

function StepThree(props) {
  console.log(props) //REMOVE
  return (
    <div>
      <div className='row'>
        <div className='col-4'>
          <label>Choose a date and time to end this pik-it</label>
        </div>
        <div className='col-8'>
          <Datetime onChange={() => this.props.next(this.state)}/>
        </div>
      </div>  
      <div className='row'>
          <div className='col-12'>
            <button>Back</button>
            {/* onClick={props.setPageBack} PUT IN BUTTON & DECLARE PROP IN FORM.JS */}
            <button>Submit</button>
            {/* onClick={props.submit} PUT IN BUTTON & DECLARE PROP IN FORM.JS */}
          </div>
        </div>
    </div>
  )
}

export default StepThree
