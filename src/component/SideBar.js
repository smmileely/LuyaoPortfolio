import React from "react";
import { Nav, Container } from "react-bootstrap";
// import { NavHashLink as NavLink } from "react-router-hash-link";
import { Link } from "react-scroll";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Profile, Education, Experience, Skills, Interest, ChatBox } from "./";
import "./SideBar.css";

export function SideBar() {
  return (
    <Nav className="flex-column">
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="profile"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Education
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Experience
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Skills
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="interest"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Interest
                </Link>
              </Nav.Link>
            </li>
          </ul>
        </div>
      </nav>
    </Nav>
  );
}
