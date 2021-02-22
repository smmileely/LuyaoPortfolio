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
import { withRouter } from "react-router";
import ProfilePic from "./assets/profilePic.PNG";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
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

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route path="/about">hello</Route>
//           <Route path="/users">user</Route>
//           <Route path="/">home</Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => (
      <div>
        <Profile />
      </div>
    ),
    main: () => <h2>About Me</h2>,
  },
  {
    path: "/education",
    exact: true,
    sidebar: () => (
      <div>
        {" "}
        <Education />
      </div>
    ),
    main: () => <h2>Education</h2>,
  },
  {
    path: "/experience",
    exact: true,
    sidebar: () => (
      <div>
        {" "}
        <Experience />
      </div>
    ),
    main: () => <h2>Experience</h2>,
  },
];

export default function App() {
  //   return (
  //     <div>
  //       <Profile />
  //       <BrowserRouter>
  //         <Switch>
  //           <Route path="/" component={Education} />
  //         </Switch>
  //       </BrowserRouter>
  //       <SideBar />
  //       <Container>
  //         <Row>
  //           <Col xs={6} md={4}>
  //             <Image src={ProfilePic} roundedCircle />
  //           </Col>
  //           <Col xs={12} md={8}>
  //             Content
  //           </Col>
  //         </Row>
  //       </Container>
  //     </div>
  //   );

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={ProfilePic} roundedCircle />
          </Col>
          <Col xs={12} md={8}>
            Content
          </Col>
        </Row>
      </Container>
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
            </ul>

            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
