import React, {Component} from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import Logo from '../logo.png'
import '../pages/pages.css'

class Thanks extends Component {
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
                        <h5 className="card-title">Congrats! You pik'd it!</h5>
                        <p className="card-text">Your poll leader will notify you when your results are ready.</p>
                     </div><br></br>
                     <div className="">
                        <a href="/"><h5>Return to Home </h5></a>
                        <a href="/create"><h5>Create a Poll</h5></a>
                     </div>
                  </div>
               </Container>
            </Hero>
         </div>
      ) 
   }   
}

export default Thanks;