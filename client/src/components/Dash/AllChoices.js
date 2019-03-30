import React from 'react'

function AllChoices(props) {
    console.log(props)
    return (
        <div className="allChoices">
            { props.choices.map((choice) => {
                console.log(choice)
                return (
                    <button 
                    key={choice.id}
                    value={choice.choice_text}
                    choiceText={choice.choice_text}
                    onClick={props.sortChoice}>
                    {choice.choice_text}
                    </button>
                )
            })}
        </div>
    )
}

export default AllChoices
