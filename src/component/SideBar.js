import React from "react";
import { Nav, Container } from "react-bootstrap";
// import { NavHashLink as NavLink } from "react-router-hash-link";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Profile, Education, Experience, Skills, Interest, ChatBox } from "./";

// export function SideBar() {
//   return (
//     <Nav defaultActiveKey="/home" className="flex-column">
//       <Nav.Link href="/home">About Me</Nav.Link>
//       <Nav.Link eventKey="link-1">Education</Nav.Link>
//       <Nav.Link eventKey="link-2">Experience</Nav.Link>
//       <Nav.Link eventKey="link-3">Skills</Nav.Link>
//       <Nav.Link eventKey="link-4">Interest</Nav.Link>
//       <Nav.Link eventKey="link-5">Chat with me!</Nav.Link>
//     </Nav>
//   );
// }

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route path="/about">
            <Education />
          </Route>
          <Route path="/dashboard">
            <Experience />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
