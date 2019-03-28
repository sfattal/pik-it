import React from 'react'

function AllChoices(props) {
    return (
        <div className="allChoices">
            <div className="row">
                <div className="col-6" style={{display: !props.choice.name && "none"}}>
                    <button onClick={props.sortChoice}>{props.choice.name}</button>
                </div>
            </div>         
        </div>
    )
}

export default AllChoices