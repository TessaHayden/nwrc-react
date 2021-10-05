import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar light color="dark">
          <div className="container">
            <NavbarBrand href="/">Northwest Restaurant Consultant</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
