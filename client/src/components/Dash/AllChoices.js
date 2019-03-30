import React from 'react'

function AllChoices(props) {
    console.log(props)
    return (
        <div className="allChoices">
            { props.choices.map((choice, index) => {
                return (
                    <button 
                    key={props.choices[index].id}
                    choiceText={props.choices[index].choice_text}
                    onClick={props.sortChoice}>{choice}</button>
                )
            })}
        </div>
    )
}

export default AllChoices

// GET from the db for each choice name and ID

// import React, {Component} from 'react'
// import LoadingHOC from './LoadingHOC'
// import '../styles/main.css'
 
// const List = (props) =>{
//   const{usernames} = props
//   return(
//     <ul>
//       {usernames.map(user => <li key={user.id}>{user.name}</li>)}
//     </ul>
//   )
// }
 
// export default LoadingHOC(List)