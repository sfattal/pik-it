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
        <div className='row'>
          <label>Title</label>
          <input
            id='title'
            className='u-full-width required'
            placeholder='Title'
            type='text'
            onChange={this.handleTitleChanged}
            value={this.state.title}
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
            onChange={this.handleDescChanged}
            value={this.state.desc}
          />
        </div>
        <div className='row'>
          <label>Email</label>
          <input
            id='email'
            className='u-full-width required'
            placeholder='test@mailbox.com'
            type='email'
            onChange={this.handleEmailChanged}
            value={this.state.email}
            autoFocus
          />
        </div>
      </div>
    )
  }
}
