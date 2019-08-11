
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { BrowserRouter as Router, Route, Link } from "react-router-dom"
  import "./style.css";

  
  
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
   

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {


    return (
      <div className="react-transition fade-in" style={{animationDuration: '1s'}}>

        <Navbar id="nav" className="nav-filled fixed-top" light expand="md">
          <NavbarBrand><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar fill>
              <NavItem>
                <NavLink><Link  to="/about" style={{ textDecoration: 'none'}}>About Us</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/book" style={{ textDecoration: 'none' }}>Book now!</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/rates" style={{ textDecoration: 'none' }}>Rates</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
