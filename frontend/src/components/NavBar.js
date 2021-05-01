import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Hamilton EMR Office</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="/">
              HOME
            </Nav.Link>
            <Nav.Link className="nav-link" href="/doc-login">
              DOCTOR LOGIN
            </Nav.Link>
            <Nav.Link className="nav-link" href="/contact">
              CONTACT
            </Nav.Link>
            <Nav.Link className="nav-link" href="/admin-login">
              ADMIN LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      //   <nav className="navbar-light bg-light">

      //        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      //   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //   <span class="navbar-toggler-icon"></span>
      // </button>
      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <Link to="/" className="nav-link">HOME</Link>
      //     <Link to="/about" className="nav-link">ABOUT</Link>
      //     <Link to="/cv" className="nav-link">NICOLE'S CV</Link>
      //     <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
      //     <Link to="/contact" className="nav-link">CONTACT</Link>
      //     </div>

      //         <div class="row">
      //   <div className="col">
      //     <nav className="nav justify-content-center">
      //     <Link to="/" className="nav-link">HOME</Link>
      //     <Link to="/about" className="nav-link">ABOUT</Link>
      //     <Link to="/cv" className="nav-link">NICOLE'S CV</Link>
      //     <Link to="/portfolio" className="nav-link">PORTFOLIO</Link>
      //     <Link to="/contact" className="nav-link">CONTACT</Link>
      //     </nav>
      //   </div>
      // </div>

      //   </nav>
    );
  }
}

export default NavigationBar;
