import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <NavbarBrand className="mr-auto" href="/">
                  <img
                    src="/assets/images/nwreslogo.svg"
                    height="40"
                    width="40"
                    alt="NW restaurant consultant logo"
                  />
                </NavbarBrand>
              </div>
              <div className="col-md-4">
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/home"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Home"
                      >
                        <i className="fa fa-home" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/portfolio"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Portfolio"
                      >
                        <i className="fa fa-th-large" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/services"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Services"
                      >
                        <i className="fa fa-info" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="nav-link"
                        to="/contactus"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Contact Us"
                      >
                        <i className="fa fa-paper-plane" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </div>
          </div>
        </Navbar>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Northwest Restaurant Consultants</h1>
                <h2>Serving the Pacific Northwest for over 20 years</h2>
                <hr />
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
