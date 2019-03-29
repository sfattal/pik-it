import React from 'react'

function StepOne(props) {
  console.log(props) //REMOVE
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <label>Title</label>
            <input
              id='title'
              className='u-full-width'
              placeholder='Title'
              type='text'
              onChange={props.handleTitleChanged}
              value={props.title}
              autoFocus
            />
            </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <label>Description</label>
            <input
              id='desc'
              className='u-full-width'
              placeholder='Description'
              type='text'
              onChange={props.handleDescChanged}
              value={props.desc}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <label>Email</label>
            <input
              id='email'
              className='u-full-width'
              placeholder='test@mailbox.com'
              type='email'
              onChange={props.handleEmailChanged}
              value={props.email}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <button onClick={props.setPage}>Next</button>
          </div>
        </div>
      </div>
    )
} 

export default StepOne
