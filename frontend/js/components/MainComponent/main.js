import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Container, Row} from 'reactstrap';
import './main.scss';
import Alerts from '../AlertsComponent/alerts';

class Main extends Component {
  static propTypes = {
    children: PropTypes.element,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Alerts {...this.props} />
        <Row>
          <header>
            <p className="header-title">Docker Express PostgreSql React Starter</p>
          </header>
          <nav>
            <Nav inline>
              <NavItem className="header-item">
                <Link className="nav-link" to={'/posts'}>Posts</Link>
              </NavItem>
              <NavItem className="header-item">
                <Link className="nav-link" to={'/author'}>Author</Link>
              </NavItem>
              <NavItem className="header-item">
                <NavLink href="http://github.com/ortee"><i className="fa fa-github"/> Github</NavLink>
              </NavItem>
            </Nav>
          </nav>
          <hr />
          {this.props.children}
        </Row>
      </Container>
    );
  }
}

export default Main;
