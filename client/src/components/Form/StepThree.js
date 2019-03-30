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
          <Datetime />
        </div>
      </div>  
      <div className='row'>
          <div className='col-12'>
            <button>Back</button>
            {/* onClick={props.setPageBack} PUT IN BUTTON & DECLARE PROP IN FORM.JS */}
            <button onClick={props.submit}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default StepThree
