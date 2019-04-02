import React, {Component} from 'react'
import Container from '../components/Container'
import Hero from '../components/Hero/index'
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
                  src = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/56474629_569831600174049_1968599424057737216_n.png?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=796b3cb80950be2258440eb7ee9a7984&oe=5D0B4B6F"/>
                  </div>
                  <div id="mainCard" className="card text-center pt-3">
                     <div className="card-body rounded">
                        <h5 className="card-title">Welcome to pik-it!</h5>
                        <p className="card-text">Click the button below to create a pik-it</p>
                        <a href="/create" className="btn btn-outline-dark btn-lg">Create</a>
                     </div>
                  </div>
               </Container>
            </Hero>
         </div>
      ) 
   }   
}

export default Home;