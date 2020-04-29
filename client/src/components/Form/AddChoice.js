import React from 'react'
import Editable from './Editable.js'
import Preview from '../../preview.png'

function AddChoice(props) {
    return (
        <div className ="row pt-1 justify-content-center d-flex flex-row">
            <div className ="col-8" style={{display: !props.choice && "none"}}>
            {props.choice.choiceType === "link" ? 
                <div >
                {/* < img id = "previewImage"
                alt = "preview"
                height="22"
                src = {Preview} /> */}
                <Editable 
                    className = "list-group-item list-group-item-light linkChoice"
                    text={props.choice.choiceLabel}
                    choicetype={props.choice.choiceType}
                    choicevalue={props.choice.choiceValue}
                > 
                    <input
                        type="text"
                        name="choice"
                        placeholder="Write a choice name"
                        value={props.choice.choiceLabel}
                        index={props.index}
                        onChange={props.onChange}
                        onBlur={e => console.log(e.target)}
                    />
                </Editable>
                {/* <a className = "list-group-item list-group-item-light" href={props.choice.choiceValue} target="blank" >{props.choice.choiceLabel}</a> : */}
                </div> :
                
                // <p className = "list-group-item list-group-item-light">{props.choice.choiceLabel}</p>
                <Editable 
                    className = "list-group-item list-group-item-light"
                    text={props.choice.choiceLabel}
                > 
                    <input
                        type="text"
                        name="choice"
                        placeholder="Write a choice name"
                        value={props.choice.choiceLabel}
                        index={props.index}
                        onChange={props.onChange}
                    />
                </Editable>}
            </div>
            {/* {props.choice.choiceType === "link" ? < img id = "previewImage"
                        alt = "preview"
                        height="22"
                        src = {Preview} /> : ""} */}
            <div className ="col-1"> 
                <button 
                    className =" mt-2 btn btn-danger" 
                    id="delete" 
                    index={props.index} 
                    style={{display: !props.choice && "none"}} 
                    onClick={props.deleteChoice}
                >Delete</button>
            </div>
        </div>
    )
}

export default AddChoice
