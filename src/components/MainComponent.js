import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Portfolio from './PortfolioComponent';
import RestaurantInfo from './RestaurantInfoComponent';
import { RESTAURANTS } from '../shared/restaurants';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: RESTAURANTS,
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/portfolio' render={() => <Portfolio restaurants={this.state.restaurants} />} />
                    <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;