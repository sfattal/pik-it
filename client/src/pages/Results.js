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
            pollTitle: '',
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
                pollTitle: data.data.pollTitle,
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
                    < div className ="border-rounded pt-2 p-3 rounded shadow bg-white container">
                        <div className="row justify-content-center">
                            <h2 className="header p-2" style={{color:'black'}}>Results for '{this.state.pollTitle}'</h2>
                        </div>
                        {this.state.pollResulted ? 
                            <div className="row p-3">
                                <div className="col border border-dark rounded py-4 mx-5">
                                    <h4 className ="mb-3">Results:</h4>
                                    <ResultsOrder 
                                        className="px-5" 
                                        choices={this.state.resultsOrder}
                                    />
                                </div>
                                <br></br>
                                <div className="col border border-dark rounded py-4 mx-5">
                                    <h4 className ="mb-3">Pik'rs:</h4>
                                    <Voters 
                                    voters={this.state.voters}/>
                                </div>
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
