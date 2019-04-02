import React from 'react'

function ChoiceOrder(props) {
    console.log(props)
    return (
        <div>
            <div className="row justify-content-center">
                <h4 className ="">Remove choices to reorder them</h4>
            </div>
            <ol className="choiceOrder fluid-container">
                {props.positions.map(position => {
                    // console.log(position)
                    return (
                        <div className="row justify-content-center pt-3">  
                            <div className="col-3"> 
                                <h6 
                                    className="mt-2"
                                    key={position.id}
                                    pollkey={position.pollID}
                                    value={position.position_text}
                                    choicetext={position.choice_text}
                                >{position}</h6>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger" id="removeChoice">remove</button>
                                {/* onClick={props.removeChoice} */}
                            </div>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}

export default ChoiceOrder
