import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopBar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
   
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand href="#"class="custom-brand">ShopSavvy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
            {/* <Nav.Link href="#action2">Deals</Nav.Link>  */}
            <Nav.Link as={Link} to="/Buy"> Buy</Nav.Link>
            <Nav.Link as={Link} to="/sell"> Sell</Nav.Link>
            <Nav.Link as={Link} to="/account"> Account</Nav.Link>
            <Nav.Link href="#" disabled>
            
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-box"
              aria-label="Search"
            />
            <Button variant="outline-success m-0">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;