import React from 'react'

function AddChoice(props) {
    return (
        <div>
            <div style={{display: !props.choice && "none"}}>
                <p>{props.choice}</p>
            </div>
            <button id="delete" style={{display: !props.choice && "none"}} onClick={props.deleteChoice}>Delete</button>
        </div>
    )
}

export default AddChoice
