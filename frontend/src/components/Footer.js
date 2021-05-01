import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends React.Component {
  render() {
    return (
      <>
      <Container className="footer">
        <Row className="footer-section">
          <Col>
            <p>
              ADDRESS
              <br />
              999 Mohawk Road <br />
              Hamilton, ON
              <br /> L1N 2H4
            </p>
          </Col>
          <Col>
            <p>
              CONTACT
              <br />
              Email: info@hamiltonEMRoffice.ca <br />
              Phone: 905-234-567
              <br /> Web: www.hamiltonEMRoffice.ca
            </p>
          </Col>
          <Col>
            <p>
              HOURS
              <br />
              Mon-Fri: 9am to 4:30pm <br />
              Sat-Sun: Closed
              <br /> Evenings: On Call
            </p>
          </Col>
        </Row>
        <Row className="footer-section">
          <Col className="copyright">
            <p>
              Copyright. All rights reserved: Hamilton EMR Office |
              <Link to="admin-login"> ADMIN LOGIN</Link>
            </p>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}

export default Footer;
