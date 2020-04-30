import React from 'react'

function Link(props) {
  // console.log(props)
  return (
      <div className = "fluid-container justify-content-center border-rounded linkComponent" >
          <div className='row justify-content-center d-flex'>
                {/* <h4 className ="pr-3">Copy</h4> */}
                {props.linkType==="adminLink" ? 
                    <div class="toooltip2 w3-round border border-dark">
                        <span id="adminSaveMe" class="toooltip2text">Save me!</span>
                    </div> : ''
                }
                
                <p className="d-flex flex-column justify-content-center align-middle mr-2" style={{lineHeight:1, margin:0}}>{props.linkText}</p>
                <div>
                    <input
                        id={props.linkType}
                        className="linkInput"
                        type="text" 
                        value={props.pollLink}
                        size="40"
                        >
                    </input>
                </div>
                <button className="btn btn-outline-dark btn" style={{lineHeight: 1}} value={props.pollLink} type={props.linkType} onClick={props.copyLink}>Copy</button>
                <div class="toooltip">
                    <span id={props.linkType==="adminLink" ? "adminTooltip" : ""} class="toooltiptext">{props.tooltipText}</span>
                </div>
            </div>
      </div>
  )
}

export default Link;