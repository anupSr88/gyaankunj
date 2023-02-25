import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GyaanKunj from '../Images/GyaanKunjLogo.png'
import ProfileLogo from '../Images/ProfileLogo.png'
import LoginPage from './LoginPage'
import '../Styles/HeaderStyle.css'
import { useState } from 'react';

function HeaderComp(props) {

  const [showLogin, setShowLogin] = useState(false)

  const openLoginPage = () => {
    setShowLogin(true)
  }


  return (
    <>
    
    <Navbar style={{paddingRight:"40px"}} fixed='top' className='headerCss'>
      
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
        <button className='headerLoginBtn' onClick={openLoginPage}>Log In</button>
      
    </Navbar>
    
    <LoginPage show={showLogin} onHide={() => {setShowLogin(false)}}/>
    </>
     
  );
      
}

export default HeaderComp;