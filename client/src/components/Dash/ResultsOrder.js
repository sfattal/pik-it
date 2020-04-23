import React from 'react'

function ResultsOrder(props) {
    console.log("before")
    console.log(props)
    console.log("consoled props")

    return (
        <div className="allChoices px-4">
            <h4 className ="">Poll Results Below:</h4>
            { props.choices.map((choice, index) => {
                // console.log(choice)
                return (
                    <div className = {index===0 ? "resultsDisplay row justify-content-center p-3 text-dark bg-success border border-dark rounded mt-2" : "resultsDisplay row justify-content-center p-3 text-dark bg-light border border-dark rounded mt-2"} >
                        <div 
                            key={choice.choiceId}
                            // poll_id={choice.poll_id}
                            // value={choice.choice_text}
                            // choiceText={choice.choice_text}
                            choiceid={choice.choiceId}>
                            {index+1} - {choice.choiceName}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ResultsOrder
