import React, { useState } from 'react'
import {Button, Row, Col, Modal} from 'react-bootstrap';
import '../Styles/LoginPage.css';
import loginImage from '../Images/loginImage.png'

const LoginPage = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="ModalContentMain">
          <Row>
            <Col md={3}>
              <div className="loginImage">
                <img className="loginImageContent" src={loginImage} />
              </div>
            </Col>
            <Col md={9} style={{border:"5px solid"}}>
              <div className="loginForm">
                <h1>Digitalize your school in minutes with Gyankunj</h1>
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
}

export default LoginPage;