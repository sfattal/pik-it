import React, {Component} from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import GIFs from '../components/Dash/GIFRibbon'
import Logo from '../logo.png'
import CreateGIF from '../create.gif'
import RankGIF from '../rank.gif'
import ResultGIF from '../result.gif'
import '../pages/pages.css'

class Home extends Component {
   render() {
      return(
         <div>
            <Hero >
               <Container>
                  <div> 
                  < img id = "logoImage"
                  alt = "logo"
                  src = {Logo} />
                  </div>
                  <div id="mainCard" className="card text-center pt-3 shadow-sm">
                     <div className="card-body rounded">
                        <h5 className="card-title">Welcome to pik-it!</h5>
                        <p className="card-text">Click the button below to create a pik-it</p>
                        <a href="/create" className="btn btn-outline-dark btn-lg">Create</a>
                     </div>
                  </div>
                  <GIFs />
                  {/* <div id="instructionsCard" className="card text-center shadow-sm mt-3">
                     <div className="card-body rounded">
                        <div className="d-flex flex-row justify-content-around">
                           <div className="d-flex flex-column instruction-card border-right">
                              <p className="card-text">1 - Create</p>
                              <img className="instructionGIF" src = {CreateGIF} />
                           </div>
                           <div className="d-flex flex-column instruction-card border-right">
                              <p className="card-text">2 - Share &amp; Rank</p>
                              <img className="instructionGIF" src = {RankGIF} />
                           </div>
                           <div className="d-flex flex-column instruction-card">
                              <p className="card-text">3 - Pik It!</p>
                              <img className="instructionGIF" src = {ResultGIF} />
                           </div>
                        </div>
                     </div>
                  </div> */}
               </Container>
            </Hero>
         </div>
      ) 
   }   
}

export default Home;