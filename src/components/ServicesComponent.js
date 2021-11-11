import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { Link } from 'react-router-dom';

function Services({ item }) {
    return (
        <Card>
            <CardBody>
                <CardTitle>Restaurants by Name</CardTitle>
                <CardSubtitle>Services rendered:</CardSubtitle>
                {/* <CardText>{item.name}</CardText> */}
            </CardBody>
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
                <div className="col">
                    <Services item={props.restaurant} />
                </div>
            </div>
        </div>
    );
}

export default RenderServices;