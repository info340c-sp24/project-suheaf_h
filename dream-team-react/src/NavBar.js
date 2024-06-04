import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/NavBar.css'; 

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-dark" data-bs-theme="dark">
      <Container fluid>
  
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 nav-links"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/">Interest</Nav.Link> */}
            <Nav.Link href="/feed">Feed</Nav.Link>
            <Nav.Link href="/savedTweets">Saved Tweets</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/About">About The Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
