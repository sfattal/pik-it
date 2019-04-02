import React from 'react'

function StepOne(props) {
  console.log(props) //REMOVE
    return (
      <div className = "fluid-container justify-content-center border-rounded pt-4" >
        <div className='row justify-content-center d-flex'>
                    <h4>Title</h4>
          <div className='col-12 pb-3 justify-content-center d-flex'>
              <div className="form-group col-6 justify-content-center">
              <input  id ="title" type="text" className="form-control" placeholder="required"   onChange={props.handleTitleChanged}
              value={props.title}
              autoFocus/>
               </div>
          </div>
        </div>
        <div className='row justify-content-center d-flex'>
              <h4> Description</h4>
          <div className = 'col-12 pb-3 justify-content-center d-flex'>
              <div class="form-group col-6 justify-content-center">
                  <input id ="desc" type="text" className="form-control" placeholder="optional"
                  onChange={props.handleDescChanged}
                  value={props.desc}/>
                </div>
            </div>
        </div>
          <div className='row justify-content-center d-flex'>
                <h4> Email</h4>
                <div className = 'col-12 pb-3 justify-content-center d-flex' >
                    <div class="form-group col-6 justify-content-center">
                    <input id="email" type="text" className="form-control" placeholder="required" onChange={props.handleEmailChanged}
                      value={props.email}
                      autoFocus />
                    </div>
                </div>
            </div>
        
          <div className='row'>
            <div className='col-12'>
              <button onClick={props.setPageNext} className="btn btn-outline-dark btn-lg">Next</button>
            </div>
          </div>
        </div> 
        

      
    )
} 

export default StepOne
