import React from 'react'

function StepOne(props) {
  console.log(props) //REMOVE
    return (
      <div className = "fluid-container justify-content-center border-rounded" >
        <div className='row justify-content-center d-flex'>
                    <h4 className ="text-light pt-5"> Title</h4>
          <div className='col-12 pb-3 justify-content-center d-flex'>
              <div class="form-group col-6 justify-content-center">
                <input  id ="title" type="text" className="form-control " id="title" placeholder="title"   onChange={props.handleTitleChanged}
              value={props.title}
              autoFocus/>
               </div>
          </div>
        </div>
        <div className='row justify-content-center d-flex'>
              <h4 className ="text-light"> Description</h4>
          <div className = 'col-12 pb-3 justify-content-center d-flex'>
              <div class="form-group col-6 justify-content-center">
                  <input id ="desc" type="text" className="form-control " id="title" placeholder="description" 
                  onChange={props.handleDescChanged}
                  value={props.desc}/>
                </div>
            </div>
        </div>
          <div className='row justify-content-center d-flex'>
                <h4 className ="text-light"> Label</h4>
                <div className = 'col-12 pb-3 justify-content-center d-flex' >
                    <div class="form-group col-6 justify-content-center">
                          <input id="email" type="text" className="form-control " id="title" placeholder="title" onChange={props.handleEmailChanged}
                    value={props.email}
                    autoFocus />
                    </div>
                </div>
            </div>
        
          <div className='row'>
            <div className='col-12'>
              <button onClick={props.setPageNext} class="btn btn-outline-light btn-lg">Next</button>
            </div>
          </div>
        </div> 
        

      
    )
} 

export default StepOne
