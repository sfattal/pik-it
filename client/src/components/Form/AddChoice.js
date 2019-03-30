import React from 'react'

function AddChoice(props) {
    return (
        <div className ="row pt-1 justify-content-center">
            <div className ="col-8" style={{display: !props.choice && "none"}}>
                <p className = "list-group-item list-group-item-light">{props.choice}</p>
            </div>
            <div className ="col-1"> 
            <button className =" mt-2 btn btn-danger" id="delete" style={{display: !props.choice && "none"}} onClick={props.deleteChoice}>Delete</button>
            </div>
        </div>
    )
}

export default AddChoice
