import React from 'react'

function AddChoice(props) {
    return (
        <div className="addChoice">
            <div className="row">
                <div className="col-3">
                    <div style={{display: !props.choice.name && "none"}}>
                        <p>{props.choice.name}</p>
                    </div>
                </div>
                <div className="col-3">
                    <button id="delete" onClick={props.deleteChoice}>Delete</button>      
                </div>
            </div>         
        </div>
    )
}

export default AddChoice
