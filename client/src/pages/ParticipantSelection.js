import React, { Component } from 'react'
import Container from '../components/Container'
import Link from '../components/Dash/Link'
import AllChoices from '../components/Dash/AllChoices'
import ChoiceOrder from '../components/Dash/ChoiceOrder'
import Voters from '../components/Dash/Voters'

class ChoiceSelection extends Component {
    constructor () {
        super()
        this.state = {
            allChoices: [],
            userOrder: []
        }
        this.handleUserOrderChanged = this.handleUserOrderChanged.bind(this);
    }
    
    renderAllChoices() {
        return this.state.allChoices.map(choices => {
          return <AllChoices allChoices={{name:choices}} />
        })
    }

    sortChoice = () => {
        // onClick function that moves the user's choice from the allChoices array to the userOrder array
    }

    removeChoice = () => {
        // function that removes the user's choice from the userOrder array back to allChoices
    }

    renderUserOrder() {
        return this.state.userOrder.map(order => {
          return <ChoiceOrder userOrder={{name:order}} />
            // removeChoice={{this.removeChoice}}
        })
    }

    render() {
        return (
            <Container>
                <div class="row">
                    <Link />
                </div>
                <div class="row">
                    <AllChoices />
                    <ChoiceOrder />
                </div>
                <div class="row">
                    <Voters />
                </div>
            </Container>
        )
    }
}
  
export default ChoiceSelection;