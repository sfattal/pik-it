import React from 'react'

function Link(props) {
  // console.log(props)
  return (
      <div className = "fluid-container justify-content-center border-rounded" >
          <div className='row justify-content-center d-flex'>
                {/* <h4 className ="pr-3">Copy</h4> */}
                <button className="btn btn-outline-dark btn" style={{lineHeight: 1}} onClick={props.copyLink}>Copy</button>
                <div>
                    <input
                        id="pollLink"
                        type="text" 
                        value={props.pollLink}
                        size="40"
                        >
                    </input>
                </div>
            </div>
      </div>
  )
}

export default Link;