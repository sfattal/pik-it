import React from 'react'

function StepOne(props) {
  console.log(props) //REMOVE
    return (
      <div className = "fluid-container justify-content-center" >
        <div className='row justify-content-center d-flex'>
                    <h4> Title</h4>
          <div className='col-12 pb-3 justify-content-center d-flex'>
              <div class="form-group col-6 justify-content-center">
                <input  id ="title" type="text" className="form-control" id="title" placeholder="title"   onChange={props.handleTitleChanged}
              value={props.title}
              autoFocus/>
               </div>
          </div>
        </div>
        <div className='row justify-content-center d-flex'>
              <h4> Description</h4>
          <div className = 'col-12 pb-3 justify-content-center d-flex'>
              <div class="form-group col-6 justify-content-center">
                  <input id ="desc" type="text" className="form-control" id="title" placeholder="description" 
                  onChange={props.handleDescChanged}
                  value={props.desc}/>
                </div>
            </div>
        </div>
          <div className='row justify-content-center d-flex'>
                <h4> Label</h4>
                <div className = 'col-12 pb-3 justify-content-center d-flex' >
                    <div class="form-group col-6 justify-content-center">
                          <input id="email" type="text" className="form-control" id="title" placeholder="title" onChange={props.handleEmailChanged}
                    value={props.email}
                    autoFocus />
                    </div>
                </div>
            </div>
        
          <div className='row'>
            <div className='col-12'>
              <button onClick={props.setPageNext} class="btn btn-primary">Next</button>
            </div>
          </div>
        </div> 
        

      
    )
} 

export default StepOne
