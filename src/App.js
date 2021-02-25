import React from "react";
import {
  Image,
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import {
  SideBar,
  Education,
  // Experience,
  Skills,
  Interest,
  ChatBox,
  Header,
} from "./component";

import Experience from "./component/Experience";

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={4}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4}>
          <SideBar />
        </Col>
        <Col xs={14} md={4}>
          <Education />
          <Experience />
          <Skills />
          <Interest />
        </Col>
      </Row>
    </Container>
  );
}
