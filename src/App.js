import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar light color="inverse" expand="md">
          <div className="container">
            <NavbarBrand href="/">Northwest Restaurant Consultant</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="index.html">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="contact.html">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Northwest Restaurant Consultant</h1>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="index.html"
                    target="_blank">Homepage</Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
