import React, { Component } from 'react'
import axios from 'axios'
import Container from '../components/Container'
// import Link from '../components/Dash/Link'
import AllChoices from '../components/Dash/AllChoices'
import ChoiceOrder from '../components/Dash/ChoiceOrder'
// import Voters from '../components/Dash/Voters'

class ParticipantSelection extends Component {
    constructor () {
        super()
        this.state = {
            allChoices: [],
            userOrder: []
        }
        // this.handleUserOrderChanged = this.handleUserOrderChanged.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/polls/Xjdjs7753dD')
        // .then(json => console.log(json.data[0].Choices))
        .then(json => {
            this.setState({allChoices: json.data[0].Choices});
            console.log('something')
            console.log(this.state.allChoices);
        } )
        .then(response => {
            this.renderAllChoices();
        })
        .catch(function(error) {
            console.log(error);
            });
    }

    renderAllChoices = (choice) => {
        return <AllChoices choice={choice}/>
    }

    sortChoice = () => {
        console.log('sorted')
        // onClick function that moves the user's choice from the allChoices array to the userOrder array !!PASS AS PROP!!
    }

    removeChoice = () => {
        // onClick function that removes the user's choice from the userOrder array back to allChoices !!PASS AS PROP!!
    }

    render() {
        return (
            <Container>
                <div className="row">
                    {/* <Link /> */}
                </div>
                <div className="row">
                    <AllChoices 
                        // key={index}
                        choices={this.state.allChoices} 
                        sortChoice={this.state.sortChoice}
                    />
                    <ChoiceOrder 
                        positions={this.state.userOrder}
                        removeChoice={this.state.removeChoice}
                    />
                </div>
                <div className="row">
                    {/* <Voters /> */}
                </div>
            </Container>
        )
    }
}
  
export default ParticipantSelection;