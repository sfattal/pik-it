import React from 'react'

function ChoiceOrder(props) {
    return (
        <div className="choiceOrder">
            <div className="row">
                <div className="col-5" style={{display: !props.choice.name && "none"}}>
                    <p>{props.choice.name}</p>
                </div>
                <div className="col-1">
                    <button id="removeChoice" onClick={props.removeChoice}>-</button>    
                </div>
            </div>         
        </div>
    )
}

export default ChoiceOrder
