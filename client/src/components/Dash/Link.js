import React from 'react'

function Link(props) {
  // console.log(props)
  return (
      <div className = "fluid-container justify-content-center border-rounded" >
          <div className='row justify-content-center d-flex'>
                {/* <h4 className ="pr-3">Copy</h4> */}
                <p className="d-flex flex-column justify-content-center align-middle mr-2" style={{lineHeight:1, margin:0}}>{props.linkText}</p>
                <div>
                    <input
                        id="pollLink"
                        type="text" 
                        value={props.pollLink}
                        size="40"
                        >
                    </input>
                </div>
                <button className="btn btn-outline-dark btn" style={{lineHeight: 1}} onClick={props.copyLink}>Copy</button>
            </div>
      </div>
  )
}

export default Link;