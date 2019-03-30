import React from 'react'
import AddChoice from './AddChoice'

function StepTwo(props) {
  console.log(props) //REMOVE
  return (
    <div className = "container">
      <div className='fluid-container'>
          <div className ="row"> 
                <div className='col-8'>
                    <input
                    className='u-full-width'
                    placeholder='Example Choice'
                    type='text'
                    onChange={props.handleChoiceChanged}
                    value={props.choice}
                    autoFocus
                    />
              </div>
              <div className='col-4'>
                <button onClick={props.addChoice}>+</button>
              </div>
        </div>
        <div/>
        {props.renderAddChoices()}
      </div>
      <div className='row'>
        
        <div className='row'>
          <div className='col-12'>
            <button onClick={props.setPageBack}>Back</button>
            <button onClick={props.setPageNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
