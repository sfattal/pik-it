import React, { Component } from 'react'
import axios from 'axios'
import Container from '../components/Container'
import Name from '../components/Dash/Name';
import Link from '../components/Dash/Link'
import AllChoices from '../components/Dash/AllChoices'
import ChoiceOrder from '../components/Dash/ChoiceOrder'
// import Voters from '../components/Dash/Voters'


class ParticipantSelection extends Component {
    constructor () {
        super()
        this.state = {
            allChoices: [],
            userOrder: [],
            participantName: '',
            pollID: '',
            pollKey: ''
        }
        this.handleNameChanged = this.handleNameChanged.bind(this);
    }
  
  
    handleNameChanged (event) {
        console.log("triggered handleNameChanged")
        this.setState({participantName: event.target.value})
        console.log(this.state);
      }

    // 'http://localhost:3001'
    //'https://pik-it.herokuapp.com'
    componentDidMount() {
        console.log("comp did mount")
        console.log(this.props)
        this.setState( { pollKey: this.props.match.params.key } )
        axios.get('/api' + this.props.match.url)
        .then(json => {
            this.setState({
                allChoices: json.data[0].Choices,
                pollID: json.data[0].Choices[0].poll_id
            });
        })
        .catch(function(error) {
            console.log(error);
            });
    }

    sortChoice = ({currentTarget}) => {
        // console.log(currentTarget.value)
        const choice = currentTarget.value
        // console.log(this.state.userOrder)
        this.setState({userOrder: [...this.state.userOrder, choice]}, ()=> console.log(this.state.userOrder))
        
    }

    removeChoice = () => {
        // onClick function that removes the user's choice from the userOrder array back to allChoices !!PASS AS PROP!!
    }

    submit = (event) => {
        event.preventDefault();
        console.log("submitted");
        console.log(this.state);

        axios.post("/api/sendResponseData", {
            poll_id: this.state.pollID,
            participantName: this.state.participantName,
            key : this.state.pollKey,
            responses : this.state.userOrder,
          }, {"headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "Access-Control-Allow-Origin": "* "
          }})
          .then(function (response) {
            console.log("thanks for voting")
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div className ="fluid-container justify-content-center pt-3"> 
                <Container>
                    < div className = "border-rounded pt-2 p-3 rounded shadow bg-white" >
                    <br></br>
                    <div className="row justify-content-left p-3">
                        <Name 
                            participantName={this.state.participantName}
                            handleNameChanged={this.handleNameChanged}
                        /> {console.log("mounted Name")} {console.log(this.state)}
                    </div>
                    < div className ="row justify-content-center">
                        <div className = "col-5">
                        <AllChoices 
                            choices={this.state.allChoices} 
                            sortChoice={this.sortChoice}
                            positions={this.state.userOrder}
                            removeChoice={this.removeChoice}
                        />
                        </div>
                        <div className="col-7">
                        <ChoiceOrder 
                            positions={this.state.userOrder}
                            removeChoice={this.removeChoice}
                        />
                        </div>
                    </div>
                    <div className="row justify-content-center p-3">
                        <Link />
                    </div>
                    <div className="row">
                        {/* <Voters /> */}
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-outline-dark btn-lg p-2" onClick={this.submit}>Submit</button>
                    </div>
                    </div>
                </Container>

            </div>
        )
    }
}
  
export default ParticipantSelection;