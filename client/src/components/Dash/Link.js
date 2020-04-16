import React from 'react'

function Link(props) {
  // console.log(props)
  return (
      <div className = "fluid-container justify-content-center border-rounded" >
          <div className='row justify-content-center d-flex'>
              <h4 className ="pr-3">Click Link to copy</h4>
              <button className="btn btn-outline-dark btn" onClick={props.copyLink}>Click to copy link</button>
          </div>
      </div>
  )
}

export default Link;