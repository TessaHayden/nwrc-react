import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-animation-components";
import Carousel from "react-bootstrap/Carousel";

function RestaurantInfo(props) {
  if (props.restaurant) {
    return (
      <div className="container">
        <div className="row">
          <RenderRestaurant restaurant={props.restaurant} />
        </div>
      </div>
    );
  }

  function RenderRestaurant({ restaurant }) {
    return (
      <div className="col-md-5 m-1">
        <h4>{restaurant.name}</h4>
        <Fade in key={restaurant.id}>
          <Card>
            <CardImg top src={restaurant.altImg} alt={restaurant.name} />
            <CardBody>
              <CardText>{restaurant.description}</CardText>
            </CardBody>
          </Card>
          <Carousel interval={4000} keyboard={false} pauseOnHover={true}>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src={restaurant.image}
                alt={restaurant.name}
              />
              <Carousel.Caption>
                {restaurant.name}
                <a href="https://www.defuegogrille.com/" target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Fade>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/portfolio">Portfolio</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.restaurant.name}</BreadcrumbItem>
          </Breadcrumb>
          <h2>{props.restaurant.name}</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <RenderRestaurant restaurant={props.restaurant} />
        </div>
      </div>
    </div>
  );
}
export default RestaurantInfo;
