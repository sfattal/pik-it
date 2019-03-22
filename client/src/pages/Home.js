import React from "react"
import {Card,Button} from "react-bootstrap" 
import Hero from "../components/Hero/index"
import Container from "../components/Container/index"
import { Link } from "react-router-dom";



function Home () {
   return(
       <div>
         < Hero backgroundImage = "https://images.unsplash.com/photo-1508796079212-a4b83cbf734d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" >
            <h1> Choosey </h1>
            <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit </h2>
        <Container>

         <Card id="mainCard" className="text-center p-3">
            <Card.Body>
               <Card.Title>Create a Choosey</Card.Title>
               <Card.Text>
               Click the link below to get started
               </Card.Text>
               <Link to="/create"> 
               <Button variant="primary">Create</Button>
               </Link>
            </Card.Body>
         </Card>
        
        </Container>
        </Hero>
        
       </div>
   ) 
}

export default Home;