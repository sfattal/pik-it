import React, {Component} from 'react'
import axios from 'axios'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import ResultsOrder from '../components/Dash/ResultsOrder'
import Voters from '../components/Dash/Voters'
import './pages.css'

class Results extends Component {
    constructor () {
        super()
        this.state = {
            pollKey: '',
            resultsOrder: [],
            voters: [],
            pollResulted: false,
            pending: false,
            results: []
        }
    }

    componentDidMount() {
        console.log("comp did mount")
        console.log(this.props)
        this.setState( { pollKey: this.props.match.params.key } )
        axios.get('/api' + this.props.match.url)
        .then(data => {
            this.setState({
                resultsOrder: data.data.rankings,
                pollResulted: data.data.pollResulted,
                voters: data.data.voters
            });
            console.log(data.data)
        })
        .catch(function(error) {
            console.log(error);
            });
    }


    renderPage = () => {
        console.log(this.state)
        return(
            <div>
                <h1>Welcome to Results</h1>
            </div>
        )
    }

    render() {
        return (
            <div className ="pt-3">
            <Hero>
               <Container>
                    < div className ="row justify-content-center">
                        {this.state.pollResulted ? 
                            <div className="d-flex justify-content-xl-between">
                                <ResultsOrder 
                                className="px-5" choices={this.state.resultsOrder}/>
                                <br></br><Voters 
                                voters={this.state.voters}/>
                            </div> :
                            <h4>Your poll leader has not yet resulted this poll.</h4>
                        }
                    </div>
               </Container>
            </Hero>
         </div>
        )
    }
}

export default Results;
