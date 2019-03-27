import React from 'react'

// deleteChoice = () => {
//     // function that removes the choice from the 
// }

function PollItem(props) {
    return (
        <div className="poll-item">
            <div className="row">
                <div className="col-3">
                    <div style={{display: !props.poll.description && "none"}}>
                        <p>{props.poll.description}</p>
                    </div>
                </div>
                <div className="col-3">
                    <button id="delete">Delete</button>      
                </div>
            </div>         
        </div>
    )
}

export default PollItem
