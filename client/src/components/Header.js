import React from "react"
import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from "react-bootstrap" 


function Header () {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">choosish</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          {/* <Nav.Link className="float-right" href="#home">Sign-in</Nav.Link> */}
          {/* <Nav.Link className="float-right" href="#home">Sign-up</Nav.Link> */}
          <Nav.Link className="float-right" href="#link">Create choosish</Nav.Link>   
        </Nav>
    </Navbar>
  )
}

export default Header; 