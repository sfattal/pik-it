import React from 'react'

function Link(props) {
  // console.log(props)
  return (
      <div className = "fluid-container justify-content-center border-rounded" >
          <div className='row justify-content-center d-flex'>
              <h4 className ="text-light">Click Link to copy</h4>
              <button className="btn btn-outline-light btn-md" onClick={''}>link goes here</button>
          </div>
      </div>
  )
}

export default Link;