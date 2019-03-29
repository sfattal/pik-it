import React, {Component} from 'react'
import Container from '../components/Container'
import {Form} from '../components/Form/Form'

import '../components/Form/css/custom.css'
import '../components/Form/css/normalize.css'
import '../components/Form/css/prog-tracker.css'
import '../components/Form/css/skeleton.css'
import './pages.css'

class Create extends Component {
  render() {
    return (
      <Container>
        <Form />
      </Container>
    )
  }
}

export default Create;
