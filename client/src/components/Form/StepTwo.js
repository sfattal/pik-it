import React from 'react'
import AddChoice from './AddChoice'

function StepTwo(props) {
  console.log(props) //REMOVE
  return (
    <div>
      <div className='row'>
        {props.renderAddChoices()}
        <AddChoice />
      </div>
      <label>Choice</label>
      <div className='row'>
        <div className='col-11'>
          <input
            className='u-full-width'
            placeholder='Example Choice'
            type='text'
            onChange={props.handleChoiceChanged}
            value={props.choice}
            autoFocus
          />
        </div>
        <div className='col-1'>
          <button onClick={props.addChoice}>+</button>
        </div>
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
