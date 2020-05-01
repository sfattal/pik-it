import React from 'react'

function StepOne(props) {
  console.log(props) //REMOVE
    return (
      <div className = "fluid-container justify-content-center pt-4 p-3 rounded shadow bg-white" >
        <h2>Create Your Poll</h2><br></br>
        <div className='row justify-content-center d-flex'>
                    <h5>Title</h5>
          <div className='col-12 pb-3 justify-content-center d-flex'>
              <div className="form-group col-6 justify-content-center">
              <input  id ="title" type="text" className="form-control" placeholder="required"   onChange={props.handleTitleChanged}
              value={props.title}
              autoFocus/>
               </div>
          </div>
        </div>
        <div className='row justify-content-center d-flex'>
              <h5> Description</h5>
          <div className = 'col-12 pb-3 justify-content-center d-flex'>
              <div className="form-group col-6 justify-content-center">
                  <input id ="desc" type="text" className="form-control" placeholder="optional"
                  onChange={props.handleDescChanged}
                  value={props.desc}/>
                </div>
            </div>
        </div>
          <div className='row justify-content-center d-flex'>
                <h5> Email</h5>
                <div className = 'col-12 pb-3 justify-content-center d-flex' >
                    <div className="form-group col-6 justify-content-center">
                    <input id="email" type="text" className="form-control" placeholder="required" onChange={props.handleEmailChanged}
                      value={props.email}
                      />
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
