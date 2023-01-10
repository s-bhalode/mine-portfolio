import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Simran Bhalode</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    {/* </Nav> */}
                    <Nav style={{marginLeft: 'auto'}}>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href="#deets">Projects</Nav.Link>
                        <Nav.Link href="#deets">Blog</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default NavbarComponent;
