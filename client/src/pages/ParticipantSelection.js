import React, { Component } from 'react'
import Container from '../components/Container'
// import Link from '../components/Dash/Link'
import AllChoices from '../components/Dash/AllChoices'
import ChoiceOrder from '../components/Dash/ChoiceOrder'
// import Voters from '../components/Dash/Voters'

class ParticipantSelection extends Component {
    constructor () {
        super()
        this.state = {
            allChoices: [1, 2, 3, 4, 5],
            userOrder: []
        }
        // this.handleUserOrderChanged = this.handleUserOrderChanged.bind(this);
    }

    sortChoice = () => {
        // onClick function that moves the user's choice from the allChoices array to the userOrder array !!PASS AS PROP!!
    }

    removeChoice = () => {
        // onClick function that removes the user's choice from the userOrder array back to allChoices !!PASS AS PROP!!
    }

    render() {
        return (
            <Container>
                <div class="row">
                    {/* <Link /> */}
                </div>
                <div class="row">
                    <AllChoices choices={ this.state.allChoices } />
                    <ChoiceOrder positions={ this.state.userOrder }/>
                </div>
                <div class="row">
                    {/* <Voters /> */}
                </div>
            </Container>
        )
    }
}
  
export default ParticipantSelection;