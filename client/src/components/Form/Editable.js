import React, { useState } from "react";
import Preview from '../../preview.png'
import styles from './style.css'

// Component accept text, placeholder values and also pass what type of Input - input, textarea so that we can use it for styling accordingly
const Editable = ({
  text,
  type,
  choicetype,
  choicevalue,
  placeholder,
  children,
  ...props
}) => {
  // Manage the state whether to show the label or the input box. By default, label will be shown.
// Exercise: It can be made dynamic by accepting initial state as props outside the component 
  const [isEditing, setEditing] = useState(false);

// Event handler while pressing any key while editing
  const handleKeyDown = (event, type) => {
    // Handle when key is pressed
  };

//   console.log("is editing? " + isEditing)
/*
- It will display a label if `isEditing` is false
- It will display the children (input or textarea) if `isEditing` is true
- when input `onBlur`, we will set the default non edit mode
Note: For simplicity purpose, I removed all the classnames, you can check the repo for CSS styles
*/
  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div>
          <span onClick={() => setEditing(true)}>
            {text || placeholder || "Editable content"}
          </span>
          <span className="align-right choiceBox">
            {choicetype === "link" ? <a href={choicevalue} target="blank">< img id = "previewImage"
                        alt = "preview"
                        height="22"
                        src = {Preview} /></a> : ""}
          </span>
        </div>
      ) }
      {/* {choicetype === "link" ? < img id = "previewImage"
                        alt = "preview"
                        height="22"
                        src = {Preview} /> : ""} */}
    </section>
  );
};

export default Editable;