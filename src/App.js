import React, { Component } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron,
} from 'reactstrap';
import Directory from './components/DirectoryComponent'
import { RESTAURANTS } from './shared/restaurants';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        restaurants: RESTAURANTS,
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
              <Col align="center">
                <h1>Northwest Restaurant Consultant</h1>
                <span>
                  | Restaurant Development | 
                </span>
                <span>
                  | Consulting |
                </span>
                <span>
                  | Mentorship |
                </span>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Directory restaurants={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
