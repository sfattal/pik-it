import React from 'react'

function AllChoices(props) {
    console.log("before")
    console.log("props: " + props)
    console.log("consoled props")
    return (
        <div className="allChoices">
            <h4 className ="">Click each choice to rank them</h4>
            { props.choices.map((choice) => {
                // console.log(choice)
                return (
                    <div className = "row justify-content-center pt-3">
                        <button 
                            className ="btn btn-outline-primary"
                            key={choice.id}
                            poll_id={choice.poll_id}
                            value={choice.choice_text}
                            choicetext={choice.choice_text}
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
