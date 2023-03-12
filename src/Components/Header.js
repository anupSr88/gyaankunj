import Container from 'react-bootstrap/Container';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import GyaanKunj from '../Images/GyaanKunjLogo.png'
import ProfileLogo from '../Images/ProfileLogo.png'
import LoginPage from './LoginPage'
import '../Styles/HeaderStyle.css'
import { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import { FaAngleDown } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import downAngle from "../Images/downAngle.png";
import { Link, useHistory } from "react-router-dom";
import profilePic from '../Images/profilePic.jpg'


function HeaderComp(props) {
  const history = useHistory();

  const [showLogin, setShowLogin] = useState(false)

  const openLoginPage = () => {
    setShowLogin(true)
  }

  const logoutFunction = () => {
    localStorage.clear();
    history.push('/')
  }

  const userDetails = JSON.parse(localStorage.getItem('UserData'))

  console.log('userDetails - ', userDetails)


  return (
    <>
      <Navbar
        style={{ paddingRight: "40px" }}
        fixed="top"
        className="headerCss"
      >
        <img src={GyaanKunj} alt="Logo" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="#link">Report</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
            
          </Nav> */}
        </Navbar.Collapse>
        {/* <img style={{height:"69px", width:"69px", borderRadius:"50%", position:"relative", right:"50px"}} src={ProfileLogo} /> */}
        {
          (localStorage.getItem('UserData') ? (
            <Row className='loggedInUserDetails'>
              
                <Col md={1} style={{padding : "0"}}>
                  <div className='loggedInProfilePic'>
                    <img className='loggedInProfileP' src = {profilePic} alt="PP" />
                  </div>
                </Col>
                <Col md={9}>
                  <span className='loggedInName'>{userDetails?.name}</span>
                </Col>
                <Col md={2}>
                  <div className='downAngle'>
                    {/* <img src = {downAngle} />  */}
                    <Nav>
                      <NavDropdown align="end" style={{fontSize:"40px", position:"relative", bottom: "13px", right:"14px"}}>
                      <NavDropdown.Item>
                        {userDetails?.name}
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                      {userDetails?.role}
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logoutFunction}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                      </Nav>                
                  </div>              
                </Col>       
            </Row>
          ) : (
            <button className="headerLoginBtn" onClick={openLoginPage}>
              Log In
            </button>
          ))
        }
      </Navbar>

      <LoginPage
        show={showLogin}
        onHide={() => {
          setShowLogin(false);
        }}
      />
    </>
  );
      
}

export default HeaderComp;