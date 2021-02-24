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
import ProfilePic from "./assets/profilePic.PNG";
import {
  Profile,
  SideBar,
  Education,
  Experience,
  Skills,
  Interest,
  ChatBox,
} from "./component";
import "./component/SelfPortrait.css";

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          <Image src={ProfilePic} className="aboutMePortrait" roundedCircle />
        </Col>
        <Col xs={12} md={4}>
          <Profile />
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
