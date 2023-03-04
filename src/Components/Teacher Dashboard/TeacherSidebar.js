import {
    Menu,
    MenuItem,
    SidebarContent,
    ProSidebar,
  } from "react-pro-sidebar";
  import './TeacherSidebar.css'
  import dashboardImg from '../../Images/dashboardImg.svg'
  import SidebarBackground from '../../Images/SidebarBackground_1.png'
  import { Row, Col } from "react-bootstrap";
  import { Link } from 'react-router-dom';
  import * as myConstant from '../fileConstant'
  
  const TeacherSidebar = () => {
    return (
      <div className="sidebarStyling" 
      style={{ background: `url(${SidebarBackground})` }}
      >
        
          <ProSidebar>
            <SidebarContent>
            <Menu
              className="sidebarMenu"
              
            >
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.dashboard}>Dashboard</Link></MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"> <Link to={myConstant.teacherRoutesConfig.classes}> Classes </Link> </MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.logBook}> Log Book</Link> </MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.lessonPlan}> Lesson Plan </Link></MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.attendance}> Attendance</Link> </MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.assignments}> Assignments</Link> </MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.announcement}> Resources </Link></MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.reports}> Report </Link> </MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.announcement}> Announcements </Link> </MenuItem>
                </Col>
              </Row>
              <Row className="sidebarMenuInner">
                <Col md={2}>
                  <img alt="close" src={dashboardImg} />
                </Col>
                <Col md={10} style={{textAlign:"left"}}>
                  <MenuItem className="menuItemStyle"><Link to={myConstant.teacherRoutesConfig.notifications}> Notifications </Link> </MenuItem>
                </Col>
              </Row>
            </Menu>
            </SidebarContent>
          </ProSidebar>
          
      </div>
    );
  };
  
  export default TeacherSidebar;
  