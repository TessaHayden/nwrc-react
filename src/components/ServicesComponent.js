import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';

function ClientList({ restaurantsfl }) {
    return (
        <Card>
            <CardBody>
                <CardTitle>Client List</CardTitle>
                <CardSubtitle>Restaurants by name:</CardSubtitle>
                <hr />
                <CardText>
                    <ul>
                        {restaurantsfl.map((restaurant) => (
                            <li key={restaurant.key}>
                                {restaurant.name}
                            </li>
                        ))}
                    </ul>
                </CardText>
            </CardBody>
        </Card>
    );
};
function Services({ services }) {
    return (
        <Card>
            <CardTitle>Services</CardTitle>
            <CardSubtitle>Services provided:</CardSubtitle>
            <hr />
            <CardText>
                <ul>
                    {services.map((service) => (
                        <li key={service.key}>
                            {service.title}
                            {services.description}
                        </li>
                    ))}
                </ul>
            </CardText>
        </Card>
    )
}

function RenderServices(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><Link to="/services">Services</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 m-2" >
                    <ClientList restaurantsfl={props.restaurantsfl} />
                </div>
                <div className="col-md-6 m-2">
                    <Services services={props.services} />
                </div>
            </div>
        </div>
    );
}

export default RenderServices;