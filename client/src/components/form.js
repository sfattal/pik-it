import React from "react"
import {Card,Button} from "react-bootstrap" 
import "./style.css"


function Form () {
  return (

<Card id="mainCard" className="text-center p-3">
    <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" >Go somewhere</Button>
    </Card.Body>
</Card>
   )
  
}

export default Form; 