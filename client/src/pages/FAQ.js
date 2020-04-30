import React, {Component} from 'react'
import FAQAccordion from '../components/Dash/FAQAccordion'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import CreateGIF from '../create.gif'
import RankGIF from '../rank.gif'
import ResultGIF from '../result.gif'
import GIFs from '../components/Dash/GIFRibbon'
// import './pages.css'

class FAQ extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        console.log('welcome to FAQ')
    }

    render() {
        return(
            <div>
                <Container>
                    <div className='m-4'></div>
                    <div className="border-rounded pt-2 p-3 rounded shadow bg-white container">
                        <div className='p-4'>
                            <h1>Welcome to the FAQ</h1>
                        </div>
                        <FAQAccordion>
                            <div label='What is pik-it?'>
                                <p>Pik-it is a ranked voting web app. You can use it to make any kind of multiple choice group decision.</p>
                                <span> Where do you want to go to brunch when the epidemic is over?</span><br></br>
                                <span>Which cabin should you and your friends book on Airbnb for the apocalypse?</span>
                                <p>How do we choose our leadership and policies and realize our dreams in a future where we can all thrive together?</p>
                                <span>Just pik-it.</span>
                            </div>
                            <div label='Why ranked voting?'>
                                <p>Typically when groups vote, they'll submit their favorite option and at the end, the choice with the most votes wins. However, a lot of information is lost this way. Ranked voting allows a spectrum of the group's sentiment to be captured, helping you pik-it a little better.
                                </p>
                            </div>
                            <div label='How does it work?'>
                                <p>Simply create a poll by entering a poll title, description, and your email. Then list out the options available. When you're done, submit your poll and you'll be taken directly to your Poll Dashboard.</p>
                                    <GIFs />
                                <br></br>
                                <p className="protip">pik-it pro-tip: copy and paste a link directly into the choice input to allow users to jump directly to your choices. feel free to update the automatically provided label.
                                </p>
                            </div>
                        </FAQAccordion>
                    </div>
                </Container>
            </div>
            
        )
    }
}

export default FAQ