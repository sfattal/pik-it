import React from 'react'

function ChoiceOrder(props) {
    return (
        <ol className="choiceOrder fluid-container">
            { props.positions.map(position => {
                return (
                    <div className = "row pt-1">  
                        <div className = "col-3"> 
                            <h6 className ="mt-2">{position}</h6>
                        </div>
                        <div className = "col-2">
                             <button className ="btn btn-danger" id="removeChoice">remove</button>
                            {/* onClick={props.removeChoice} */}
                        </div>
                    </div>
                )
            })}
        </ol>
    )
}

export default ChoiceOrder
