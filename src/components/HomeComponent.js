import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "45rem" }}>
            <CardImg src={item.altImg} alt={item.name} />
            <CardBody>
              <CardTitle>Bill Hayden</CardTitle>
              <CardSubtitle>Owner &amp; Consultant</CardSubtitle>
              <hr />
              <CardText>
                Bill Hayden has served the Pacific NorthWest for over 20 years
                as a restaurant consultant &amp; owner. Over 300 restaurants and
                businesses have utilized Bill's expertise and skills to: improve
                customer satisfaction, train employees and increase profits
                while reducing losses.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
function RenderCenterScreen({ examples }) {
  return (
    <Card>
      <CardImg src={examples.altImg} alt={examples.name} />
    </Card>
  );
}

function Home(props) {
  return (
    <div className="screen-container">
      <RenderCard item={props.restaurant} />
      <RenderCenterScreen examples={props.examples} />
    </div>
  );
}

export default Home;
