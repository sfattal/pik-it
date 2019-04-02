import React, {Component} from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import './pages.css'

class Results extends Component {
    constructor () {
        super()
        this.state = {
            // pending: 
            // result: 
        }
    }

    render() {
        return (
            <div>
            <Hero>
               <Container>
                {/* {this.renderResultsPage()} */}
               </Container>
            </Hero>
         </div>
        )
    }
}

export default Results;
