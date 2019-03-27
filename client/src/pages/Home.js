import React, {Component} from 'react'
import Hero from '../components/Hero/index'
import Container from '../components/Container/index'
import '../pages/pages.css'

class Home extends Component {
   render() {
      return(
         <div>
            <Hero backgroundImage = "https://images.unsplash.com/photo-1508796079212-a4b83cbf734d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
               <Container>
                  <h1> Choosey </h1>
                  <div id="mainCard" class="card text-center">
                     <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/create" class="btn btn-primary">Go somewhere</a>
                     </div>
                  </div>
               </Container>
            </Hero>
         </div>
      ) 
   }   
}

export default Home;