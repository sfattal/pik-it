import React, {Component} from 'react';
import MultiStep from '../components/Form/multiStep'
import { steps } from '../components/Form/Form'
import '../components/Form/css/custom.css'
import '../components/Form/css/normalize.css'
import '../components/Form/css/prog-tracker.css'
import '../components/Form/css/skeleton.css'
import './pages.css'

class Create extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <MultiStep steps={steps}/>
        </div>
      </div>
    )
  }
}

export default Create;
