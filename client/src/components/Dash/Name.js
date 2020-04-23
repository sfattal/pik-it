import React from 'react'

function Name(props) {
    console.log(props)
    return (
        <div className = "fluid-container justify-content-center border-rounded col 8" >
            <div className='justify-content-center d-flex'>
                <h4 className ="">Name</h4>
                <div className="col-6 justify-content-left">
                <input  
                    id ="participantName" 
                    type="text" 
                    className="form-control" 
                    placeholder="required"   
                    onChange={props.handleNameChanged}
                    value={props.participantName}
                    required
                    autoFocus
                />
                </div>
            </div>
        </div>
    )
}

export default Name
