import React from 'react'

export class StepOne extends React.Component {
  constructor () {
    super()
    this.state = { 
      title: '', 
      desc: '',
      email: ''
    }
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleDescChanged = this.handleDescChanged.bind(this);
    this.handleEmailChanged = this.handleEmailChanged.bind(this);
  }

  handleTitleChanged (event) {
    this.setState({title: event.target.value})
  }

  handleDescChanged (event) {
    this.setState({desc: event.target.value})
  }

  handleEmailChanged (event) {
    this.setState({email: event.target.value})
  }

  render () {
    return (
      <div>
        <label>Title</label>
        <input
          className='u-full-width'
          placeholder='Title'
          type='text'
          onChange={this.handleTitleChanged}
          value={this.state.title}
          autoFocus
        />

        <label>Description</label>
        <input
          className='u-full-width'
          placeholder='Description'
          type='text'
          onChange={this.handleDescChanged}
          value={this.state.desc}
        />
        
        <label>Your email</label>
        <input
          className='u-full-width required'
          placeholder='test@mailbox.com'
          type='email'
          onChange={this.handleEmailChanged}
          value={this.state.email}
          autoFocus
        />
      </div>
    )
  }
}
