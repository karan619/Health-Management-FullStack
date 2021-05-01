import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    content: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (key, val) => {
    setContactData({ ...contactData, [key]: val });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (contactData.name === "" || contactData.email === "") {
      setMessage("Fill in required fields");
      return;
    }
    await fetch("http://localhost:4000/contact_form/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: contactData.name,
        email: contactData.email,
        phoneNumber: contactData.email,
        content: contactData.content,
      }),
    }).then((response) => {
      if (response) {
        if (response.status === 200) {
          setMessage(
            "Thank you for your message. We will be in touch shortly."
          );
        } else {
          setMessage("Your message was unsuccessful. Please resubmit.");
        }
      }
    });
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <tr></tr>
          </Col>
          <Col>
            <tr>
              <h1>Contact Us</h1>
            </tr>
            <tr>
              <h5>
                For more information, please complete the form below and we will
                get back you within 48hrs.
              </h5>
            </tr>
          </Col>
          <Col>
            <tr></tr>
          </Col>
        </Row>

        <form className="form">
          <Row>
            <Col>
              <label htmlFor="name">Name:</label>
              <input
                value={contactData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                type="text"
                id="name"
                name="name"
                required
              />
            </Col>
            <Col>
              <label htmlFor="email">Email:</label>
              <input
                value={contactData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                type="email"
                id="email"
                required
              />
            </Col>
            <Col>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                value={contactData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                type="phoneNumber"
                id="phoneNumber"
                placeholder="xxx-xxx-xxxx"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <label htmlFor="content">Content</label>
              <textarea
                type="text"
                value={contactData.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
                rows="3"
                cols="30"
                name="content"
                id="content"
                required
              ></textarea>
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                type="submit"
                onClick={onSubmit}
                value="Submit"
                className="button-contact"
              />
              <p>{message}</p>
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Contact;
