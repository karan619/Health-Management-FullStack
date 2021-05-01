//external imports
import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//internal imports
import mission from "../images/medical-staff-drawing.jpg";
import iconOne from "../images/consulting.png";
import iconTwo from "../images/heart.png";
import iconThree from "../images/hospital-sign.png";
import iconFour from "../images/medical-report.png";
import iconFive from "../images/medicine.png";
import iconSix from "../images/stethoscope.png";
import bottomImage from "../images/medical-background-off-white.jpg";

class Home extends React.Component {
  render() {
    return (
      <>
        <Container className="hero">
          <Row>
            <Col>{/* <img src={homeHero} /> */}</Col>
            <Col></Col>
            <Col className="welcome-section">
              <h1>HAMILTON MEDICAL OFFICE</h1>
              <h2>Medical Staff and Patient Care</h2>
              <p className="hero-p">
                We believe in providing comprehensive health care services to
                our patients in a friendly and relaxed atmosphere. Our
                experienced Physicians are here to work with you to achieve your
                best health. Our Medical Centre is now open to accept medical
                appointments, Speech Language Therapy, Occupational Therapy and
                Psychotherapy. Book an appointment today with one of our
                experienced doctors.
              </p>
              <Button href="/patient-login">BOOK AN APPOINTMENT</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="mission-stmt">
              <h2 className="mission">OUR MISSION</h2>
              <h3>Our medical practice strives for the very best care.</h3>
              <p>
                We provide professional, individualized, high-quality medical
                care on an as-needed or preventative basis to our patience. Our
                experienced medical staff and Physicians believe in working with
                our patients to provide education as well as a comprehensive
                health care system for all of your confidential medical records.
                We will work together with you to serve your entire family's
                medical needs in all stages of life.
              </p>
            </Col>
            <Col>{<img src={mission} alt="test" />}</Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <img src={iconOne} alt="consulting" class="icon" />
              <h3>MEDICAL STAFF</h3>
              <p>
                Our on site Registered Nurses and Doctors offer high quality
                medical services to help you develop the tools you need to
                overcome any challenge you may be facing in your life.
              </p>
            </Col>
            <Col>
              <img src={iconTwo} alt="heart" class="icon" />
              <h3>NATUROPATHY</h3>
              <p>
                Our Naturopathic Doctor provides the highest quality
                naturopathic medicine treatments and can assist with many
                different diagnostic conditions.
              </p>
            </Col>
            <Col>
              <img src={iconThree} alt="hospital-sign" class="icon" />
              <h3>COVID CARE</h3>
              <p>
                Covid-19 Injections are administered by our trained medical
                staff and physicians in the office in a comfortable environment
                to prevent the spread and contraction of covid.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <img src={iconFour} alt="medical-report" class="icon" />
              <h3>QUALITY CARE</h3>
              <p>
                Comprehensive high quality medical care for you and your family.
                We have both male and female physicians and medical staff on
                hand to provide you with the comfort and care you deserve.
              </p>
            </Col>
            <Col>
              <img src={iconFive} alt="medicine" class="icon" />
              <h3>TITLE</h3>
              <p>
                We are pleased to offer a variety of medical Prescriptions for
                our patients. Learn how to make the most out of life with our
                pain management prescriptions in combination with our therapy.
              </p>
            </Col>
            <Col>
              <img src={iconSix} alt="stethoscope" class="icon" />
              <h3>CONFIDENTIALITY</h3>
              <p>
                Our doctors and trained medical staff hold your care and
                treatment with the upmost confidentiality. We care about your
                health AND your privacy.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="bottomImage">
          <Row>
            <Col>{/* <img src={bottomImage} /> */}</Col>
            <Col className="bottom-section">
              <h1 className="bottom-h1">MEDICAL STAFF YOU CAN TRUST</h1>
              <h2 className="bottom-h2">Dependable, Caring Medical Staff</h2>
              <p className="bottom-p">
                We believe in the upmost dependable and trustworthy doctors and
                nurses and ensure that they have great bedside mannor as well as
                an education that is suitable for handling their role within the
                patient care departments they serve. We are happy to welcome you
                into our family of care and wish you the best of all health
                outcomes from working with us. To know more about how we can
                better serve you, please contact us at your convenience.
              </p>
              <Button href="/contact">CONTACT US</Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
