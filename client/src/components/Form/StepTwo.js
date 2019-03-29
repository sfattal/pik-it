import React from 'react'
import AddChoice from './AddChoice'


  function StepTwo(props) {
    console.log(props)
    return (
      <div>
        {props.renderAddChoices()}
        <AddChoice />
        <label>Choice</label>
        <div className='row'>
          <div className='col-11'>
            <input
              className='u-full-width required userChoice'
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
          <button onClick={props.setPage}>Next</button>
        </div>
      </div>
    )
  }
// }

export default StepTwo
