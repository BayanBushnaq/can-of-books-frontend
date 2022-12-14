import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><LoginButton/></NavItem>
        <NavItem><LogoutButton/></NavItem>
        <NavItem><Link to="/" className="nav-link" style={{color:'white',  padding: 20}}>Home</Link></NavItem>
        <NavItem><Link to="/profile" className="nav-link" style={{color:'white'}}>profile</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
