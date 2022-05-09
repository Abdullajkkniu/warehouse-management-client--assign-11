import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../../../Pages/Home/Header/Header.css';



const Header = () => {
    const [user] = useAuthState(auth)
  const handleSignOut=()=>{
    signOut(auth)
  }
    return (
        <>
  
  <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
        <Container className='text-center'>
        <Navbar.Brand as={Link} to="/" className='title'>My-Warehouse-Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mx-auto'>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {
              user && <>
              <Nav.Link as={Link} to="/manageitems">Manageitems</Nav.Link>
              <Nav.Link as={Link} to="/additems">Additems</Nav.Link>
              <Nav.Link as={Link} to="/myitems">Myitems</Nav.Link>
              </>
            }
            
            
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            
            
           
            
            {

              user ? <Nav.Link onClick={handleSignOut}>SignOut</Nav.Link> : 
              <Nav.Link eventKey={2} as={Link} to="/login">
              Login
            </Nav.Link>}
            
          </Nav>

        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </>
        
    );
};

export default Header;