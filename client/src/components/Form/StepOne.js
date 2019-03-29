import React from 'react'

function StepOne(props) {
  console.log(props)
    return (
      <div>
        <div className='row'>
          <label>Title</label>
           <input
                  id='title'
                  className='u-full-width required'
                  placeholder='Title'
                  type='text'
                  onChange={props.handleTitleChanged}
                  value={props.title}
                  autoFocus
                />
              </div>
              <div className='row'>
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
              <div className='row'>
                <label>Email</label>
                <input
                  id='email'
                  className='u-full-width required'
                  placeholder='test@mailbox.com'
                  type='email'
                  onChange={props.handleEmailChanged}
                  value={props.email}
                  autoFocus
                />
              </div>
              <button onClick={props.setPage}>Next</button>
            </div>
    )
} 

export default StepOne
