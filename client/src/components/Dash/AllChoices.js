import React from 'react'

function AllChoices(props) {
    console.log(props)
    return (
        <div className="allChoices">
            { props.choices.map((choice) => {
                console.log(choice)
                return (
                    <div className = "row pt-3">
                    <button 
                    className ="btn btn-outline-primary"
                    key={choice.id}
                    value={choice.choice_text}
                    choiceText={choice.choice_text}
                    onClick={props.sortChoice}>
                    {choice.choice_text}
                    </button>
                    </div>
                )
            })}
        </div>
    )
}

export default AllChoices
