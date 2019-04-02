import React from 'react'

function Name(props) {
    console.log(props)
    return (
        <div className = "fluid-container justify-content-center border-rounded" >
            <div className='row justify-content-center d-flex'>
                <h4 className ="text-light">Name</h4>
            <div className='col-12 pb-3 justify-content-center d-flex'>
                <div className="form-group col-6 justify-content-center">
                <input  
                    id ="name" 
                    type="text" 
                    className="form-control" 
                    placeholder="required"   
                    onChange={props.handleNameChanged}
                    value={props.name}
                    autoFocus
                />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Name
