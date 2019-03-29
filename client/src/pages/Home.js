import React, {Component} from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
import '../pages/pages.css'

class Home extends Component {
   render() {
      return(
         <div>
            <Hero backgroundImage = "https://images.unsplash.com/photo-1508796079212-a4b83cbf734d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80">
               <Container>
                  <h1>pik-it</h1>
                  <div id="mainCard" className="card text-center">
                     <div className="card-body">
                        <h5 className="card-title">Welcome to pik-it!</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/create" className="btn btn-primary">Create</a>
                     </div>
                  </div>
               </Container>
            </Hero>
         </div>
      ) 
   }   
}

export default Home;