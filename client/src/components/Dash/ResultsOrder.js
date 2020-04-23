import React from 'react'

function ResultsOrder(props) {
    console.log("before")
    console.log(props)
    console.log("consoled props")
    return (
        <div className="allChoices px-4">
            <h4 className ="">Poll Results Below:</h4>
            { props.choices.map((choice) => {
                // console.log(choice)
                return (
                    <div className = "row justify-content-center pt-3">
                        <button 
                            className ="btn btn-outline-primary"
                            key={choice.choiceId}
                            // poll_id={choice.poll_id}
                            // value={choice.choice_text}
                            // choiceText={choice.choice_text}
                            choiceid={choice.choiceId}>
                            {choice.choiceName}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ResultsOrder
