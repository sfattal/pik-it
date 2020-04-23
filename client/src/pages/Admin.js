import React, {Component} from 'react'
import axios from 'axios'
import Container from '../components/Container'
import './pages.css'

class Admin extends Component {
    constructor() {
        super()
        this.state = {
            adminKey: '',
            pollKey: '',
            voters: [],
            pollData: {},
            pollResulted: false
        }
        this.resultPoll = this.resultPoll.bind(this)
    }

    componentDidMount() {
        console.log("admin mounted")
        console.log(this.props.match.url)
        this.setState( { adminKey: this.props.match.params.key } )
        axios.get('/api' + this.props.match.url) //will need to set up a different route that searches by admin_key
        .then(data => {
            console.log("this is data")
            console.log(data)
            console.log(data.data[0].id)
            this.setState({
                pollKey: data.data[0].poll_key,
                pollData: data.data[0]
            });
            console.log(this.state)
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    resultPoll() {
        console.log("poll being resulted")
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
                    <div className="row justify-content-center">
                        <button className="btn btn-outline-dark btn-lg p-2" onClick={this.resultPoll}>Result Poll</button>
                    </div>
                    </div>
                </Container>

            </div>
        )
    }
}

export default Admin;
