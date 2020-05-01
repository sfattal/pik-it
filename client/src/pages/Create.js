import React, {Component} from 'react'
import Container from '../components/Container'
import {Form} from '../components/Form/Form'
import Logo from '../logo.png'

class Create extends Component {
  render() {
    return (
      <Container>
        <div className=''>
          < img id = "logoImage"
              alt = "logo"
              src = {Logo} />
        </div>
        <Form />
      </Container>
    )
  }
}

export default Create;
