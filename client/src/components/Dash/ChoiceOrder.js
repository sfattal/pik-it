import React from 'react'

function ChoiceOrder(props) {
    return (
        <ol className="choiceOrder">
            { props.positions.map(position => {
                return (
                    <div className="row">
                        <li>{position}</li>
                        <button id="removeChoice">remove</button>
                        {/* onClick={props.removeChoice} */}
                    </div>
                )
            })}
        </ol>
    )
}

export default ChoiceOrder
