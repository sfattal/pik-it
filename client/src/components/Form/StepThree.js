import React from 'react'
import Datetime from 'react-datetime'

function StepThree(props) {
  console.log(props) //REMOVE
  return (
    <div className="fluid-container">
      <div className='row text-center justify-content-center'>
        <div className='col-12'>
          <h1 className ="text-light"> Choose a date and time to send this pik-it </h1>
        </div>
        </div>
        <div className="row text-center justify-content-center "> 
        <div className='col-8'>
          <Datetime 
          // onChange={props.handleDateChanged}
          // value={props.date} 
          />
          {/* onChange={() => this.props.next(this.state)} */}  
        </div>
      </div>  
      <div className='row'>
          <div className='col-12'>
            <button class="btn btn-outline-light btn-lg p-2" onClick={props.setPageBack}>Back</button>
            <button class="btn btn-outline-light btn-lg p-2" onClick={props.submit}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default StepThree
