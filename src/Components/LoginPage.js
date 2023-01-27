import React from "react";
import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import "../Styles/LoginPage.css";
import loginImage from "../Images/loginImage.png";

const LoginPage = (props) => {
  return (
    <>
      <Modal
        className="ModalBody"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="ModalContentMain">
          <Row>
            <Col md={3}>
              <div className="loginImage">
                <img
                  className="loginImageContent"
                  alt="login"
                  src={loginImage}
                />
              </div>
            </Col>
            <Col md={9}>
              <div className="loginForm">
                <h1 style={{textAlign: "center", font: "normal normal bold 35px/50px Roboto", letterSpacing: "0px", color: "#0B1785"}}>Digitalize your school in minutes</h1>
                <h1 style={{textAlign: "center", font: "normal normal bold 35px/50px Roboto", letterSpacing: "0px", color: "#5AB6DE"}}> with Gyankunj</h1>
                <div className="loginFormContent">
                  <Form>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label style={{textAlign: "left", font: "normal normal normal 20px/26px Roboto", letterSpacing: "0px", color: "#2A2D2F", opacity: "1"}}>Enter your User ID</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label style={{textAlign: "left", font: "normal normal normal 20px/26px Roboto", letterSpacing: "0px", color: "#2A2D2F", opacity: "1"}}>Enter your password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                    <a href="#">Forgot password?</a>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="loginBtn">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default LoginPage;
