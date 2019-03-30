import React from 'react'

function AddChoice(props) {
    return (
        <div class ="row pt-2">
            <div class ="col-3" style={{display: !props.choice && "none"}}>
                <p>{props.choice}</p>
            </div>
            <div class ="col-3"> 
            <button id="delete" style={{display: !props.choice && "none"}} onClick={props.deleteChoice}>Delete</button>
            </div>
        </div>
    )
}

export default AddChoice
