import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import selfPortrait from "../assets/profilePic.PNG";
import "./SelfPortrait.css";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

export function Header() {
  return (
    <Container className="home-hero align-items-center fd-flex pb-3 mb-3" fluid>
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
            <h1 className="display-4 font-weight-bolder"> Weng Lu Yao </h1>
            <p className="pt-md-2 pt-lg-3">
              A quantity surveyor who is trying to learn new skills and venture
              into the world of codes.
            </p>
            <IconContext.Provider
              value={{ color: "cornblueflower", size: "2em" }}
            >
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/wengluyao/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://github.com/smmileely" target="_blank">
                  <FaGithub />
                </a>
                <a href="mailto:wengluyao0127@gmail.com" target="_blank">
                  <FaEnvelope />
                </a>
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
