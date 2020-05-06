import React, {Component} from 'react'
import FAQAccordion from '../components/Dash/FAQAccordion'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import Logo from '../logo.png'
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
                    <div className=''>
                    < img id = "logoImage"
                        alt = "logo"
                        src = {Logo} />
                    </div>
                    <div className="border-rounded pt-2 p-3 rounded shadow bg-white container">
                    
                        <div className='p-4'>
                            <h1>Frequently Asked Questions</h1>
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
                                <p>There are many ways to collect and count votes, and often times the method will have a bearing on the results. The simplest and most common form of voting is plurality voting, where each voter submits their top choice and the option with the most votes wins. However, this methodology only accounts for voters' top choices. Ranked voting is able to capture a wider spectrum of the group's preferences, helping you pik-it a little better.
                                </p>
                                <p>Currently, pik-it supports ranked choice voting via the <a href="https://en.wikipedia.org/wiki/Borda_count" target="_blank" rel="noopener noreferrer">Borda count</a><span>.</span></p>
                            </div>
                            <div label='How does it work?'>
                                <p>Simply create a poll by entering a poll title, description, and your email. Then list out the available options. When you're done, submit your poll and you'll be taken directly to your Poll Dashboard, where you will manage your poll. Keep reading to learn about that.</p>
                                    <GIFs />
                                <br></br>
                                <p className="protip"><strong>pik-it pro-tip:</strong> copy and paste a link directly into the choice input to allow users to jump directly to your choices. feel free to update the automatically provided label.
                                </p>
                                <p>When the Poll Leader ends the poll, pik-it aggregates the rankings and shows you the final order, using the <a href="https://en.wikipedia.org/wiki/Borda_count" target="_blank" rel="noopener noreferrer">Borda count</a><span> methodology.</span></p>
                            </div>
                            <div label='What is the Poll Dashboard?'>
                                <p>Upon creating your poll, you'll be taken directly to the Poll Dashboard. The dashboard is initially available only to the Poll Leader (though anyone with the Dashboard link will be able to access it). Here you'll be provided with two links:</p>
                                <div className="col-8">
                                <span><strong>Poll Link</strong> - Send this to all poll members to collect their piks</span><br></br>
                                <span><strong>Dashboard Link</strong> - This link will give you access to the Poll Dashboard. You'll need to access the dashboard to close the poll, which will tally the results.</span><br></br><br></br></div>
                                <p> Because we don't require users to create accounts, all workflows are managed via these links, so keep them handy until your poll is complete.</p>
                            </div>
                        </FAQAccordion>
                    </div>
                </Container>
            </div>
            
        )
    }
}

export default FAQ