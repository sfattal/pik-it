import React, {Component} from 'react'
import axios from 'axios'
import Container from '../components/Container'
import Voters from '../components/Dash/Voters'
import Link from '../components/Dash/Link'
import './pages.css'

class Admin extends Component {
    constructor() {
        super()
        this.state = {
            adminKey: '',
            pollKey: '',
            pollLink: '',
            voters: [],
            pollData: {},
            pollResulted: false
        }
        this.resultPoll = this.resultPoll.bind(this);
        this.goToResults = this.goToResults.bind(this);
        this.goToPoll = this.goToPoll.bind(this);
        this.copyLink = this.copyLink.bind(this);
    }

    componentDidMount() {
        console.log("admin mounted")
        console.log(this.props)
        const pollLinkBase = window.location.origin.toString() + "/polls/"
        this.setState( { adminKey: this.props.match.params.key } )
        axios.get('/api' + this.props.match.url) //will need to set up a different route that searches by admin_key
        .then(data => {
            console.log("this is data")
            console.log(data)
            console.log(data.data[0].id)
            this.setState({
                pollKey: data.data[0].poll_key,
                pollResulted: data.data[0].poll_resulted,
                pollLink: pollLinkBase + data.data[0].poll_key,
                pollData: data.data[0],
                voters: data.data[0].Users
            });
            console.log(this.state)
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    resultPoll() {
        // this.setState( prevState => {
        //     console.log(prevState)
        //     return {
        //         pollResulted: !prevState.pollResulted
        //     }
        // })
        const pollResulted = !this.state.pollResulted
        this.setState({
            pollResulted: pollResulted
        })
        const url = "/api/polls/update/" + this.state.pollKey
        console.log("poll resulted status is " + pollResulted)
        console.log(url)
        axios.put(url, {
            pollResulted: pollResulted
        }, {"headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
            "Access-Control-Allow-Origin": "* "
          }})
          .then(function (response) {
            console.log("poll resulteddd")
            console.log(response);
            document.getElementById("resultsButton").focus()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    goToResults() {
        console.log("yay look at those results!")
        window.location=window.location.origin.toString() + "/results/" + this.state.pollKey
    }

    goToPoll() {
        console.log("going to poll")
        window.location=this.state.pollLink
    }

    copyLink () {
        const pollLink = window.location.origin.toString() + "/polls/" + this.state.pollKey
        console.log(pollLink)

        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = pollLink;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);

        console.log("copied link!!!")
    }

    render() {
        return (
            <div className ="fluid-container justify-content-center pt-3"> 
                <Container>
                    < div className = "border-rounded pt-2 p-3 rounded shadow bg-white" >
                    <br></br>
                    {/* <div className="row justify-content-left p-3">
                        <Name 
                            participantName={this.state.participantName}
                            handleNameChanged={this.handleNameChanged}
                        /> {console.log(this.state)}
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
                        <Link pollKey={this.state.pollKey} copyLink={this.copyLink}/>
                    </div>
                    <div className="row">
                        <Voters />
                    </div> */}
                    <div className="d-flex justify-content-around">
                    <div className="row justify-content-center">
                        <button 
                            className="btn btn-outline-dark btn-lg p-2" 
                            onClick={this.resultPoll}
                            >{this.state.pollResulted ? "Unresult Poll" : "Result Poll"}
                        </button>
                    </div>
                    <div className="row justify-content-center">
                        <button 
                            id="goToPollButton"
                            disabled={this.state.pollResulted}
                            className="btn btn-outline-dark btn-lg p-2" 
                            onClick={this.goToPoll}
                            >Go Vote
                        </button>
                    </div>
                    <div className="row justify-content-center">
                        <button 
                            id="resultsButton"
                            disabled={!this.state.pollResulted}
                            className="btn btn-outline-dark btn-lg p-2" 
                            onClick={this.goToResults}
                            >See Results
                        </button>
                    </div>
                    </div>
                    <br></br>
                    <div className="row justify-content-center">
                        <Link pollLink={this.state.pollLink} copyLink={this.copyLink}/>
                    </div><br></br>
                    <div className="row justify-content-center">
                        <Voters voters={this.state.voters}/>
                    </div>
                    </div>
                </Container>

            </div>
        )
    }
}

export default Admin;
