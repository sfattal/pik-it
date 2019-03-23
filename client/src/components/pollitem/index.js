import React from "react"

function PollItem(props) {
    console.log(props)
    return (
    <div className="poll-item">
        <div class ="row">
            <div class = "col-4"> 
                <button style={{display: !props.poll.description && "none"}}type="button" class="btn btn-outline-primary"> <p>Poll Description : {props.poll.description} </p></button>
            </div>
            <div class = "col-2 text-center pt-3">
                <button id="addOptionBtn" type="button" class="btn btn-primary">Delete</button>               
            </div>
        </div>
    </div>
    )
}

export default PollItem