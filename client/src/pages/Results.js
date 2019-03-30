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
            <Hero backgroundImage = "https://images.unsplash.com/photo-1508796079212-a4b83cbf734d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
               <Container>
                {/* {this.renderResultsPage()} */}
               </Container>
            </Hero>
         </div>
        )
    }
}

export default Results;
