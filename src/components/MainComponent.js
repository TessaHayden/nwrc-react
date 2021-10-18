import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Portfolio from './PortfolioComponent';
import RestaurantInfo from './RestaurantInfoComponent';
import { RESTAURANTS } from '../shared/restaurants';
import Header from './HeaderComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: RESTAURANTS,
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Portfolio />
                
            </div>
        )
    }
}

export default Main;