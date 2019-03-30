import React from 'react'

function Pending() {
    return (
        <div>
            <div className='row'>
                <h3>All the results haven't come in yet</h3>
                <h3>Please check in later or ask the creator to end the pik-it!</h3>
            </div>
        </div>
    )
}

export default Pending

// import React, {Component} from 'react'
// import spinner from '../spinner.gif'
 
// const LoadingHOC = (WrappedState) =>{
//   return(
//     class LoadingHOC extends Component{
//       render(){
//         return this.props.usernames.length === 0 ? <img className="isLoading" src={spinner}/> : <WrappedState {...this.props}/>
//       }
//     }
//   )
// }
 
// export default LoadingHOC