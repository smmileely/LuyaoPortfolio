import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExperienceTemplate = (props) => {
  return (
    <Container
      className="resume-text py-3 px-sm-0 px-md-1 px-lg-5"
      id={props.exp.id}
    >
      <Container className="px-sm-0 px-md-1 px-lg-5">
        <Row xs={1} sm={2}>
          <Col sm={8} md={8}>
            <h1> {props.exp.name} </h1>
          </Col>
          <Col sm={4} md={4} className="text-sm-right">
            {" "}
            {props.exp.period}{" "}
          </Col>
        </Row>
        <Row>
          <Col className="font-italic"> {props.exp.company} </Col>
        </Row>
        <Row>
          <Col>
            {props.exp.det1 && <li> {props.exp.det1} </li>}
            {props.exp.det2 && <li> {props.exp.det2} </li>}
            {props.exp.det3 && <li> {props.exp.det3} </li>}
            {props.exp.det4 && <li> {props.exp.det4} </li>}
            {props.exp.det5 && <li> {props.exp.det5} </li>}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ExperienceTemplate;
