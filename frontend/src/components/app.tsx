import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "rsuite/dist/styles/rsuite-default.css";
import {
  Container,
  Header,
  Content,
  Footer,
  Sidenav,
  Nav,
  Dropdown,
  Icon
} from "rsuite";

import "../styles/styles.styl";

import Auth from "./auth/auth";
import Dashboard from "./dashboard/index";

import SingleQuestion from "./questions/index";

interface ExpandState {
  expanded: boolean;
}

export default class OivaApp extends React.Component<{}, ExpandState> {
  constructor() {
    super();
    this.state = {
      expanded: false,
      activeKey: "1"
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleToggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {
    const { expanded } = this.state;
    return (
      <Router>
        <div id="oivaApp">
          <header>
            <nav>
              <ul>
                <li>
                  <a id="menuToggle" href="#" onClick={this.handleToggle}>
                    <Icon icon="bars" />
                  </a>
                </li>
              </ul>
            </nav>
            <div id="logo">
              <Link to="/"></Link>
            </div>
          </header>

          <div id="oivaContainer">
            <Sidenav
              id="oivaNav"
              expanded={expanded}
              onSelect={this.handleSelect}
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item
                    eventKey="1"
                    icon={<Icon icon="dashboard" />}
                    href="/dashboard"
                  >
                    Ohjauspaneeli
                  </Nav.Item>
                  <Nav.Item
                    eventKey="2"
                    icon={<Icon icon="sign-in" />}
                    href="/auth"
                  >
                    Kirjaudu
                  </Nav.Item>
                  {/*<Dropdown
                  placement="rightStart"
                  eventKey="3"
                  title="Advanced"
                  icon={<Icon icon="magic" />}
                >
                  <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  placement="rightStart"
                  eventKey="4"
                  title="Settings"
                  icon={<Icon icon="gear-circle" />}
                >
                  <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                  <Dropdown.Menu eventKey="4-5" title="Custom Action">
                    <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                    <Dropdown.Item eventKey="4-5-2">
                      Action Params
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>*/}
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <div id="oivaContent">
              <section>
                <Switch>
                  <Route path="/auth">
                    <Auth />
                  </Route>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route
                    path="/question/:questionId"
                    component={SingleQuestion}
                  />
                </Switch>
              </section>
              <footer>
                <code>&copy; Oiva app v1.0.0</code>
              </footer>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
