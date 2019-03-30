import React from 'react'

function StepTwo(props) {
  console.log(props) //REMOVE
  return (
    < div className = "fluid-container justify-content-center border-rounded pt-5" >
      <h3 className ="text-light"> Please enter poll choices here</h3>
      <div className="pt-3">
              < div className = "row justify-content-center flex-row" >
                    <div className='col-8'>
                        <input
                        className='form-control'
                        placeholder='Example Choice'
                        type='text'
                        onChange={props.handleChoiceChanged}
                        value={props.choice}
                        autoFocus
                        />
                  </div>
                  <div className='col-1'>
                    <button className ="btn btn-success "onClick={props.addChoice}>+</button>
                  </div>
            </div>
            <div/>
            <div className='container pt-2'>
              {props.renderAddChoices()}
            </div>
            
      </div>
      <div className='row pt-3'>
          <div className='col-12 justify-content-space-evenly'>
            <button class="btn btn-outline-light btn-lg p-2" onClick={props.setPageBack}>Back</button>
            <button class="btn btn-outline-light btn-lg"onClick={props.setPageNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default StepTwo
