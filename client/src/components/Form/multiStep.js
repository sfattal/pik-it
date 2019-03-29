import React, { useState } from 'react'
import Axios from 'axios';

import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'

const getNavStyles = (indx, length) => {
  let styles = []
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done')
    } else if (i === indx) {
      styles.push('doing')
    } else {
      styles.push('todo')
    }
  }
  return styles
}

const pollData = {

}

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
      showSubmitBtn: false
    }
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
      showSubmitBtn: false
    }
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false,
      showSubmitBtn: true
    }
  }
}

export default function MultiStep(props) {
  const [stylesState, setStyles] = useState(getNavStyles(0, props.steps.length))
  const [compState, setComp] = useState(0)
  const [buttonsState, setButtons] = useState(getButtonsState(0, props.steps.length))
  
  function setStepState(indx) {
    setStyles(getNavStyles(indx, props.steps.length))
    setComp(indx < props.steps.length? indx : compState)
    setButtons(getButtonsState(indx, props.steps.length))
  }

  const next = (data) => {
    // if ( === 0) {
    //   axios.post('/poll', {
    console.log(pollData);
    pollData.title = data.title;
    pollData.desc = data.desc;
    pollData.email = data.email;
    pollData.choices = data.choices;
    pollData.expirationDate = data.date;
    console.log(pollData);
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }
    setStepState(compState + 1);
  }
  
  const submitPollData = (data) => {
    // pollData[data]
    console.log("we are submitting this data: ");
    console.log(pollData);
  }
  
  
  const previous = () => setStepState((compState > 0) ? compState - 1 : compState)

  // const submit = () => setStepState()

  const handleKeyDown = (evt) => evt.which === 13 ? next(props.steps.length) : {}

  const handleOnClick = (evt) => {
    if (evt.currentTarget.value === props.steps.length - 1 && compState === props.steps.length - 1) {
      setStepState(props.steps.length)
    } else {
      setStepState(evt.currentTarget.value)
    }
  }

  const renderSteps = () => 
    props.steps.map((s, i) => (
      <li
        className={'progtrckr-' + stylesState[i]}
        onClick={handleOnClick}
        key={i}
        value={i}
      >
        <em>{i + 1}</em>
        <span>{props.steps[i].name}</span>
      </li>
    ))

  return (
      <div className='container' onKeyDown={handleKeyDown}>
        <ol className='progtrckr'>
          {renderSteps()}
        </ol>
        {
          compState === 0 ? 
          <StepOne next={next} buttonState={{showNextBtn:buttonsState.showNextBtn}}/> :
          compState === 1 ?
          <StepTwo next={next} buttonState={{showNextBtn:buttonsState.showNextBtn}}/> : 
          <StepThree next={next} submitPollData={submitPollData}/>
        }
        <div style={props.showNavigation ? {} : { display: 'none' }}>
          <button
            style={buttonsState.showPreviousBtn ? {} : { display: 'none' }}
            onClick={previous}
          >
            Previous
          </button>

          {/* <button
            style={buttonsState.showNextBtn ? {} : { display: 'none' }}
            onClick={next}
          >
            Next
          </button> */}

          <button
            style={buttonsState.showSubmitBtn ? {} : { display: 'none' }}
            // onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
  )
}

MultiStep.defaultProps = {
  showNavigation: true
}
