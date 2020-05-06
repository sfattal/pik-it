import React, {Component} from 'react'
import axios from 'axios'
import Container from '../components/Container'
import Voters from '../components/Dash/Voters'
import Link from '../components/Dash/Link'
import Logo from '../logo.png'
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

        document.getElementById('adminSaveMe').style.display="block";
        document.getElementById('adminSaveMe').style.visibility="visible";
        document.getElementById('adminSaveMe').style.opacity=1;
        setTimeout(function(){ document.getElementById('adminSaveMe').style.display="none"; }, 3000);
        setTimeout(function(){ document.getElementById('adminSaveMe').style.visibility="hidden"; }, 3000);
        setTimeout(function(){ document.getElementById('adminSaveMe').style.opacity=0; }, 3000);
        setTimeout(function(){ document.getElementById('adminSaveMe').style.transition="opacity 0.3s"; }, 3000);
        document.getElementById('adminLink').select();
    }

    resultPoll() {

        if (this.state.voters.length < 2) {
            alert("Can't result poll before 2 users have submitted")
        } else {
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
    }

    goToResults() {
        console.log("yay look at those results!")
        window.location=window.location.origin.toString() + "/results/" + this.state.pollKey
    }

    goToPoll() {
        console.log("going to poll")
        window.location=this.state.pollLink
    }

    copyLink (event) {
        console.log(event.target)
        const linkValue = event.target.value
        // var linkValue = window.location.origin.toString() + "/polls/" + this.state.pollKey
        console.log(linkValue)

        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = linkValue;
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
        // Highlight the link text in input field as signal to user
        document.getElementById(event.target.attributes.type.value).select()
        console.log("copied link!!!")
    }

    render() {
        return (
            <div className ="fluid-container justify-content-center"> 
                <Container>
                    < img id = "logoImage"
                            alt = "logo"
                            src = {Logo} />
                    < div className = "border-rounded pt-2 p-3 rounded shadow bg-white" >
                    <br></br>
                    <div>
                        <h2>Poll Dashboard</h2>
                        <h5>Use this page to manage your poll</h5>
                    </div><br></br><br></br>
                    <div className="d-flex flex-row justify-content-around">
                    <div className="d-flex flex-column justify-content-around border border-dark rounded pl-4 pr-4">
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
                            className="btn btn-outline-dark btn-lg p-2" 
                            onClick={this.resultPoll}
                            >{this.state.pollResulted ? "Re-open Poll" : "Close Poll"}
                        </button>
                    </div>
                    <div className="row justify-content-center ml-3 mr-3">
                        <button 
                            id="resultsButton"
                            disabled={!this.state.pollResulted}
                            className="btn btn-outline-dark btn-lg p-2" 
                            onClick={this.goToResults}
                            >See Results
                        </button>
                    </div>
                    </div>

                    <div className="d-flex flex-column justify-content-around">
                        <div className="d-flex">
                            <Link 
                                pollLink={this.state.pollLink} 
                                linkType="pollLink" 
                                copyLink={this.copyLink} 
                                linkText="Poll Link:"
                                tooltipText="Share this link with friends to collect their piks."/>
                        </div><br></br>
                        <div className="d-flex">
                            <Link 
                                pollLink={window.location.toString()} 
                                linkType="adminLink" 
                                copyLink={this.copyLink} 
                                linkText="Dashboard:"
                                tooltipText="Save this link! You will need to return here to see the results." />
                        </div><br></br><br></br>
                        <div className="col border border-dark rounded p-4">
                            <h4>Pik'rs</h4><br></br>
                            <Voters voters={this.state.voters}/>
                        </div>
                    </div>
                    </div>
                    </div>
                </Container>

            </div>
        )
    }
}

export default Admin;
