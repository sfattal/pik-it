import React from 'react'

function Voters(props) {
    console.log("before")
    // console.log(props)
    console.log("consoled props")
    return (
        <div className="voters">
            <h4 className ="">The following users have voted:</h4>
            { props.voters.map((voter) => {
                // console.log(choice)
                return (
                    <div className = "row justify-content-center pt-3">
                        <button 
                            className ="btn btn-outline-primary"
                            key={voter.id}
                            poll_id={props.pollData.id}
                            value={voter.name}
                            // onClick={props.sortChoice} can have this create pop up window of user votes
                          >
                            {voter.name}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Voters