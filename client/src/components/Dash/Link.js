import React from 'react'

export class Link extends React.Component {
    constructor () {
        super()
        this.state = { 
            // link: new Link()
        }
    }

    render () {
        return (
          <div>
            <div className='row'>
              <div className='col-11'>
                <div>Link Goes Here</div>
              </div>
              <div className='col-1'>
                <button>copy</button>
              </div>
            </div>  
          </div>
      )
      }
}