import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderRestaurant({ restaurant }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={restaurant.image} alt={restaurant.name} />
                <CardBody>
                    <CardText>{restaurant.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RestaurantInfo(props) {
    // const restaurant = props.restaurant;
    if (props.restaurant) {
        return (
            <div className="container">
                <div className="row">
                    <RenderRestaurant restaurant={props.restaurant} />
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/portfolio">Portfolio</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.restaurant.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.restaurant.name}</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderRestaurant restaurant={props.restaurant} />
            </div>
        </div>
    );
}
export default RestaurantInfo;