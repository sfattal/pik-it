import React from 'react'

function ResultsOrder(props) {
    console.log("before")
    console.log(props)
    console.log("consoled props")

    return (
        <div className="allResults pt-1 pb-2 rounded">
            
            { props.choices.map((choice, index) => {
                // console.log(choice)
                return (
                    <div className={index===0? "resultsWinner resultsDisplay" : "resultsDisplay"} >
                    {/* <div className = {index===0 ? "resultsDisplay row justify-content-center p-3 text-dark bg-success border border-dark rounded mt-2" : "resultsDisplay row justify-content-center p-3 text-dark bg-light border border-dark rounded mt-2"} > */}
                        <div 
                            key={choice.choiceId}
                            // poll_id={choice.poll_id}
                            // value={choice.choice_text}
                            // choiceText={choice.choice_text}
                            choiceid={choice.choiceId}>
                            {choice.choiceType==="link" ?
                            <a href={choice.choiceValue} target="_blank" rel="noopener noreferrer" >{index+1} - {choice.choiceLabel}</a> :
                            <span>{index+1} - {choice.choiceLabel}</span>}
                            {/* {index+1} - {choice.choiceLabel} */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ResultsOrder
