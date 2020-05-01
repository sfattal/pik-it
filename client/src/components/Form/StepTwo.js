import React from 'react'

function StepTwo(props) {
  console.log(props) //REMOVE
  return (
    < div className = "fluid-container justify-content-center border-rounded pt-4 p-3 rounded shadow bg-white" >
      <div className="">
        <h2>{props.pollTitle}</h2>
        <h6 className="pollDescription" style={{color:"grey"}}>{props.pollDescription}</h6><br></br>
      </div>
      <h5 className =""> Please enter poll choices below:</h5>
      <div className="pt-3">
              < div className = "row justify-content-center flex-row" >
                    <div className='col-8'>
                        <input
                        className='form-control'
                        placeholder='Example Choice'
                        type='text'
                        onChange={props.handleChoiceChanged}
                        onKeyPress={props.handleEnter}
                        value={props.choiceInput}
                        autoFocus
                        />
                  </div>
                  <div className='col-1'>
                    <button className="btn btn-success" id="add-choice" onClick={props.addChoice}>+</button>
                  </div>
            </div>
            <div/>
            <div className='container pt-2'>
              {props.renderAddChoices()}
            </div>
            
      </div>
      <div className='row pt-3'>
          <div className='col-12 justify-content-space-evenly'>
            <button className="btn btn-outline-dark btn-lg p-2" onClick={props.setPageBack}>Back</button>
            {/* <button class="btn btn-outline-dark btn-lg" id="next-button" onClick={props.setPageNext}>Next</button> */}
            <button id="submitButton" className="btn btn-outline-dark btn-lg p-2" onClick={props.submit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
