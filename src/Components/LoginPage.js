import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import "../Styles/LoginPage.css";
import loginImage from "../Images/loginImage.png";
import closeBtn from "../Images/closeBtn.png";
import * as myConstant from './fileConstant'
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {

  const history = useHistory();

  console.log("history - ", history)

  const [userData, setUserData] = useState('')

  const closeLoginModal = () => {
    props.onHide()
  }

  useEffect(() => {
    const config = {
      headers:{
        "x-access-tokens": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOiI2Zjc1MmQ4Ni02MDY2LTQyMDEtOWEwZi0wMDlkNTc4OWQxNWMiLCJleHAiOjE2Nzk5MzI5Mzh9.qnsrz3KA7djBfCGA3ZeS48Uk4zXPWR4O9AyxayWA-mE"
      }
    };
    const url = "/view_assignments?teacher_id=EMP2";
    
    const data ={
      teacher_id: "EMP2",
      grade_id: "1",
      section_id: "1",
      subject_id: "1"
    }
    axios.get(url, config, data)
    
    .then((res) => console.log(res.data))
    .catch((err) => console.log("error occured"))
  },[])

  const loginUser = () => {
    console.log("Login Clicked")
    axios.get('/view_assignments?teacher_id=EMP2')
    .then((res) => console.log(res.data))
    .catch((err) => console.log("error occured"))
  }

  const loginToContinue = () => {
    props.onHide()
    history.push({
      pathname: `${myConstant.routesConfig.principaldashboard}`,
      state: `${myConstant.routesConfig.principaldashboard}`
    })
  }
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
            <Col md={8}>
              <div className="loginForm">
                <h1 style={{textAlign: "center", font: "normal normal bold 26px/34px Roboto", letterSpacing: "0px", color: "#0B1785"}}>Digitalize your school in minutes</h1>
                <h1 style={{textAlign: "center", font: "normal normal bold 26px/34px Roboto", letterSpacing: "0px", color: "#5AB6DE"}}> with Gyankunj</h1>
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
                    <Button variant="primary" className="loginBtn" onClick={loginToContinue}>
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col md={1}>
            <img alt="close" src = {closeBtn} onClick={closeLoginModal} style={{position: "relative", top: "15px", cursor:"pointer"}}/>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default LoginPage;
