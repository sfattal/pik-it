import React from 'react'

function Voters(props) {
    if (props.voters.length < 1) {
      return (
        <div className="voters">
              <h4 className ="">No users have pik'd anything</h4>
        </div>
      ) 
    } 
    else {
      return (
        <div className="voters px-4">
            <h4 className ="pb-2">The following users have pik'd it:</h4>
            { props.voters.map((voter) => {
                // console.log(choice)
                return (
                    <div className = "row justify-content-center">
                        <h5 
                            className ="submittedVoter"
                            key={voter.id}
                            value={voter.user_name}
                            // onClick={props.sortChoice} can have this create pop up window of user votes
                          >
                            {voter.user_name}
                        </h5>
                    </div>
                )
            })}
        </div>
    )
    }
}

export default Voters