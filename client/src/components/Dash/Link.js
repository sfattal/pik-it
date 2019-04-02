import React from 'react'

function Link(props) {
  console.log(props)
  return (
      <div className = "fluid-container justify-content-center border-rounded" >
          <div className='row justify-content-center d-flex'>
              <h4 className ="text-light">Sharing Link</h4>
          <div className='col-12 pb-3 justify-content-center d-flex'>
            <button>link goes here</button>
          </div>
          </div>
      </div>
  )
}

export default Link;