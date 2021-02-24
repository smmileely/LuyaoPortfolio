import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import selfPortrait from "../../assets/selfPortrait.jpg";

import "./HomeHero.css";
import ContactIcon from "./ContactIcon";

const HomeHero = () => {
  const linkedin = "https://www.linkedin.com/in/wengluyao/";
  const github = "https://github.com/smmileely";
  const mail = "mailto:wengluyao0127@gmail.com";

  return (
    <Container className="home-hero align-items-center d-flex pb-3 mb-3" fluid>
      <Container className="pb-lg-3 pb-md-3 pb-sm-1 pb-xs-0">
        <Row className="px-lg-5 align-items-center">
          <Col className="text-center" md={6} lg={6}>
            <Image
              src={selfPortrait}
              className="aboutMePortrait"
              roundedCircle
            />
          </Col>
          <Col
            className="pr-md-3 pr-lg-5 pt-2 pt-md-3 text-center text-lg-left"
            md={6}
            lg={6}
          >
            <h1 className="display-4 font-weight-bolder"> Hello! </h1>
            <p className="pt-md-2 pt-lg-3">I'm Lu Yao.</p>
            <div className="pt-2">
              <ContactIcon
                link={linkedin}
                icon="linkedin"
                iconStyle="primary"
                iconText="LinkedIn"
              />
              <ContactIcon
                link={github}
                icon="github"
                iconStyle="secondary"
                iconText="GitHub"
              />
              <ContactIcon
                link={mail}
                icon="mail"
                iconStyle="teal"
                iconText="Email"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeHero;
