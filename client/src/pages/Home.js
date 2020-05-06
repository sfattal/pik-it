import React, {Component} from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import GIFs from '../components/Dash/GIFRibbon'
import Logo from '../logo.png'
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
               </Container>
            </Hero>
         </div>
      ) 
   }   
}

export default Home;