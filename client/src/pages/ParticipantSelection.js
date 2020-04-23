import React, { Component } from 'react'
import axios from 'axios'
import Container from '../components/Container'
import Name from '../components/Dash/Name';
import Link from '../components/Dash/Link'
import AllChoices from '../components/Dash/AllChoices'
import ChoiceOrder from '../components/Dash/ChoiceOrder'
import DragAndDrop from '../components/Dash/DragAndDrop'

// import Voters from '../components/Dash/Voters'


class ParticipantSelection extends Component {
    constructor () {
        super()
        this.state = {
            allChoices: [],
            userOrder: [],
            numChoices: 0,
            rankSelection: [],
            participantName: '',
            pollID: '',
            pollKey: '',
            pollLink: '',
            pollResulted: false
        }
        this.handleNameChanged = this.handleNameChanged.bind(this);
        this.copyLink = this.copyLink.bind(this);
        this.onChoiceClick = this.onChoiceClick.bind(this);
    }

    getList = id => this.state[id];

    // id2List = {
    //     allChoices: 'allChoices',
    //     droppable2: 'rankSelection'
    // };
  
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
        const pollLinkBase = window.location.origin.toString() + "/polls/"
        this.setState( { pollKey: this.props.match.params.key } )
        axios.get('/api' + this.props.match.url)
        .then(json => {
            this.setState({
                allChoices: json.data[0].Choices,
                numChoices: json.data[0].Choices.length,
                pollID: json.data[0].Choices[0].poll_id,
                pollLink: pollLinkBase + this.state.pollKey,
            });
            if (json.data[0].poll_resulted) {
                window.location = window.location.origin.toString() + "/results/" + this.state.pollKey
            }
        })
        .catch(function(error) {
            console.log(error);
            });
    }

    onChoiceClick = ({currentTarget}) => {
        console.log(currentTarget)
        const selectedChoice = currentTarget.getAttribute("data-rbd-draggable-id")
        console.log(selectedChoice)
        const choiceArr = this.state.allChoices
        const rankingsArr = this.state.rankSelection
        const choiceIndex = choiceArr.findIndex( x => x.choice_text === selectedChoice)
        const choiceElem = choiceArr[choiceIndex]
        const [removed] = choiceArr.splice(choiceIndex, 1)
        console.log(removed)
        rankingsArr.push(removed)
        this.setState({
            allChoices: choiceArr,
            rankSelection: rankingsArr
        })
    }


    sortChoice = ({currentTarget}) => {
        console.log("current target: ")
        console.log(currentTarget)
        const choiceText = currentTarget.value
        const choiceID = currentTarget.getAttribute("choiceID")
        const choice = [ choiceText, choiceID ]
        console.log(choice)
        // console.log(this.state.userOrder)
        this.setState({userOrder: [...this.state.userOrder, choice]}, ()=> console.log(this.state.userOrder))
        
    }

    removeChoice = () => {
        // onClick function that removes the user's choice from the userOrder array back to allChoices !!PASS AS PROP!!
    }

    onDragEnd = result => {

        // a little function to help us with reordering the result
        const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            // const result = list
            // console.log("result:")
            // console.log(result)
            // console.log(result[0])
            // console.log(result[1])
            // console.log(result[2])
            // console.log(result[3])
            // console.log("start index: " + startIndex)
            // console.log("end index: " + endIndex)
            // console.log(result.splice(startIndex, 1))
            // console.log(result.splice(endIndex))
            // console.log(result[startIndex-1])
            const [removed] = result.splice(startIndex, 1);
            console.log("removed")
            console.log(removed)
            result.splice(endIndex, 0, removed);
            console.log("reordered result:")
            console.log(result)
            return result;
        };

        /**
         * Moves an item from one list to another list.
         */
        const move = (source, destination, droppableSource, droppableDestination) => {
            const sourceClone = Array.from(source);
            const destClone = Array.from(destination);
            const [removed] = sourceClone.splice(droppableSource.index, 1);
            console.log("removed2")
            console.log(removed)
            console.log(sourceClone)

            destClone.splice(droppableDestination.index, 0, removed);

            const result = {};
            result[droppableSource.droppableId] = sourceClone;
            result[droppableDestination.droppableId] = destClone;

            return result;
        }; 

        const { source, destination } = result;
        console.log("here is the result")
        console.log(result)

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {

            // console.log(this.state["allChoices"])
            console.log(result)
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );
            console.log(items)
            let allChoices = items
            let state = { allChoices };

            if (source.droppableId === 'rankSelection') {
                state = { rankSelection: items };
                console.log("this is the sorting box")
            }
            this.setState(
                state
            );

        } else {
            console.log(source)
            console.log(destination)
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                allChoices: result.allChoices,
                rankSelection: result.rankSelection
            });
        }
    };

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
        // Highlight the link text in input field as signal to user
        document.getElementById("pollLink").select()
        console.log("copied link!!!")
    }

    // submit = (event) => {
    //     event.preventDefault();
    //     console.log("submitted");
    //     console.log(this.state);

    //     axios.post("/api/sendResponseData", {
    //         poll_id: this.state.pollID,
    //         participantName: this.state.participantName,
    //         key : this.state.pollKey,
    //         responses : this.state.userOrder,
    //       }, {"headers": {
    //         "Content-Type": "application/json",
    //         "cache-control": "no-cache",
    //         "Access-Control-Allow-Origin": "* "
    //       }})
    //       .then(function (response) {
    //         console.log("thanks for voting")
    //         console.log(response)
    //         console.log("thanks again!")
    //         window.location.replace(`/thanks`);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }

    submit = (event) => {
        event.preventDefault();
        console.log("submitted");
        console.log(this.state);

        if (this.state.participantName === '') {
            document.getElementById("participantName").focus()
        } else if (this.state.rankSelection.length !== this.state.numChoices) {
            alert("You must rank all available choices!")
        } else {
            axios.post("/api/sendResponseData", {
                poll_id: this.state.pollID,
                participantName: this.state.participantName,
                key : this.state.pollKey,
                responses : this.state.rankSelection,
              }, {"headers": {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
                "Access-Control-Allow-Origin": "* "
              }})
              .then(function (response) {
                console.log("thanks for voting")
                console.log(response)
                console.log("thanks again!")
                window.location.replace(`/thanks`);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
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
                        /> {console.log(this.state)}
                    </div>
                    <div className ="row justify-content-center">
                        <DragAndDrop 
                            choices={this.state.allChoices}
                            rankings={this.state.rankSelection}
                            onDragEnd={this.onDragEnd}
                            onChoiceClick={this.onChoiceClick}
                        />
                    </div>
                    {/* < div className ="row justify-content-center">
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
                    </div> */}
                    <div className="row justify-content-center p-3">
                        <Link pollLink={this.state.pollLink} copyLink={this.copyLink}/>
                    </div>
                    <div className="row">
                        {/* <Voters /> */}
                    </div>
                    <div className="row justify-content-around">
                        <button className="btn btn-outline-dark btn-lg p-2" onClick={this.submit}>Submit</button>
                    </div>
                    </div>
                </Container>

            </div>
        )
    }
}
  
export default ParticipantSelection;