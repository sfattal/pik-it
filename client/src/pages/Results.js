import React, {Component} from 'react'
import axios from 'axios'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import ResultsOrder from '../components/Dash/ResultsOrder'
import './pages.css'

class Results extends Component {
    constructor () {
        super()
        this.state = {
            pollKey: '',
            resultsOrder: [],
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
                resultsOrder: data.data
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
         
                        {<ResultsOrder 
                            choices={this.state.resultsOrder} 
                            // sortChoice={this.sortChoice}
                            // positions={this.state.userOrder}
                            // removeChoice={this.removeChoice}
                        />}
                    </div>
               </Container>
            </Hero>
         </div>
        )
    }
}

export default Results;
