import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import "../assets/css/Header.css"

const Header = () => {
  return (
    <Navbar style={{backgroundColor: 'rgb(93, 93, 245)' , position:'fixed', zIndex:'99', width:"100%"}} variant="dark" expand="lg">
      <Navbar.Brand>
        {/* This local is to put the real logo */}
        <span className="pagelogo">SAMPLE PAGE</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav row">
        <Nav className="col-4">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown className='cols-2' title="Features" id="features-dropdown">
            <NavDropdown.Item href="#feature1">Feature 1</NavDropdown.Item>
            <NavDropdown.Item href="#feature2">Feature 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="More" id="more-dropdown">
            <NavDropdown.Item href="#more1">More 1</NavDropdown.Item>
            <NavDropdown.Item href="#more2">More 2</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <div className="search-bar" >
              <input type="text" placeholder="Enter your search here..." />
              <span className="search-icon"><FaSearch /></span>
        </div>
        <div className="ml-2 col-4"> {/* Add some margin to create space */}
          <Button variant="outline-light" className='float-right btn'>Login</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
