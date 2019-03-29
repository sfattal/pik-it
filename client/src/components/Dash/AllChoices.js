import React from 'react'

function AllChoices(props) {
    return (
        <div className="allChoices">
            { props.choices.map(choice => {
                return (
                    <div>
                        <button>{choice}</button>
                        {/* onClick={props.sortChoice} */}
                    </div>
                )
            })}
        </div>
    )
}

export default AllChoices

// GET from the db for each choice name and ID