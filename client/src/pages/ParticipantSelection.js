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
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('http://localhost:3001' + this.props.match.url)
        .then(json => {
            this.setState({allChoices: json.data[0].Choices});
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

    sortChoice = ({currentTarget}) => {
        console.log(currentTarget.value)
        const choice = currentTarget.value
        console.log(this.state.userOrder)
        this.setState({userOrder: [...this.state.userOrder, choice]}, ()=> console.log(this.state.userOrder))
        
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
                        choices={this.state.allChoices} 
                        sortChoice={this.sortChoice}
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