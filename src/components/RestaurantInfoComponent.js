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
          <ImagesForRenderRestaurant menus={props.menus} />
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
        </Fade>
      </div>
    );
  }

  function ImagesForRenderRestaurant({ menus }) {
    return (
      <div className="col-md-5 m-1">
        <Fade in>
          <Carousel interval={4000} keyboard={false} pauseOnHover={true}>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src="../assets/images/brazilian-salmon-bowl.jpg"
                alt="alternative solution"
              />
              <Carousel.Caption>
                de Fuego
                <a href="https://www.defuegogrille.com/" target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src="https://d1ralsognjng37.cloudfront.net/a0331a66-c9e2-43de-8dba-3031c8967177.jpeg"
                alt="alternative solution 2"
              />
              <Carousel.Caption>
                Shigezo
                <a href="https://www.shigezo-pdx.com/" target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src="https://images.getbento.com/accounts/606a9c22cbdd0f334c02ed59dad16f93/media/images/21128DSC_1925.jpeg"
                alt="alternative solution 3"
              />
              <Carousel.Caption>
                Hayden's Lakefront Grill
                <a href="https://www.haydensgrill.com/" target="_blank">
                  <Button>Go To</Button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "650px" }}>
              <img
                className="d-block w-100"
                src="https://static.spotapps.co/spots/ca/18c87b77034dc8b9fbede276d499a7/medium"
                alt="alternative solution 4"
              />
              <Carousel.Caption>
                Southpark Seafood Grill
                <a href="https://southparkseafood.com/" target="_blank">
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
        <div className="col-md-4">
          <ImagesForRenderRestaurant menus={props.menus} />
        </div>
      </div>
    </div>
  );
}
export default RestaurantInfo;
