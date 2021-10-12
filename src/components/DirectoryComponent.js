import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRestaurant: null
        };
    }
    onSelectRes(restaurant) {
        this.setState({ selectedRestaurant: restaurant });
    }
    renderSelectRes(restaurant) {
        if (restaurant) {
            return (
                <Card>
                    <CardImg top src={restaurant.alt} alt={restaurant.name} />
                    <CardBody>
                        <CardTitle>{restaurant.name}</CardTitle>
                        <CardText>{restaurant.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }
    
    render() {
        const directory = this.props.restaurants.map(restaurant => {
            return (
                <div key={restaurant.id} className="col-md-6 m-1">
                    <Card onClick={() => this.onSelectRes(restaurant)}>
                        <CardImg width="100%" src={restaurant.image} alt={restaurant.name} />
                        <CardImgOverlay>
                            <CardTitle>{restaurant.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectRes(this.state.selectedRestaurant)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;