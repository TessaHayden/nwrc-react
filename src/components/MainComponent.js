import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Portfolio from './PortfolioComponent';
import RestaurantInfo from './RestaurantInfoComponent';
import Contact from './ContactComponent';
import RenderServices from './ServicesComponent';



const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        menus: state.menus,
    }
}

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home restaurant={this.props.restaurants.filter(restaurant => restaurant.featured)[0]} />
            );
        };
        const RestaurantWithId = ({ match }) => {
            return (
                <RestaurantInfo
                    restaurant={this.props.restaurants.filter(restaurant => restaurant.id === +match.params.restaurantId)[0]}
                    menus={this.props.menus.filter(menu => menu.id === +match.params.menuId)[0]}
                />
            );
        };
        const ServicesList = () => {
            return (
                <RenderServices item={this.props.restaurants} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/portfolio' render={() => <Portfolio restaurants={this.props.restaurants} />} />
                    <Route path='/portfolio/:restaurantId' component={RestaurantWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/services' component={ServicesList} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));