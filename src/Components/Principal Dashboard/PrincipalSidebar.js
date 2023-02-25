import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  ProSidebar,
  ProSidebarProvider
} from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css'
import './PrincipalSidebar.css'
import dashboardImg from '../../Images/dashboardImg.svg'
import SidebarBackground from '../../Images/SidebarBackground_1.png'
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import * as myConstant from '../fileConstant'

const PrincipalSidebar = () => {
  return (
    <div className="sidebarStyling" style={{ background: `url(${SidebarBackground})` }}>
      
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
                <MenuItem className="menuItemStyle"><Link to={myConstant.routesConfig.dashboard}>Dashboard</Link></MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              <Col md={10} style={{textAlign:"left"}}>
                <MenuItem className="menuItemStyle"> <Link to={myConstant.routesConfig.masterRoutine}> Master Routine </Link> </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              <Col md={10} style={{textAlign:"left"}}>
                <MenuItem className="menuItemStyle"><Link to={myConstant.routesConfig.lessonPlan}> Lesson Plan</Link> </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              <Col md={10} style={{textAlign:"left"}}>
                <MenuItem className="menuItemStyle"><Link to={myConstant.routesConfig.attendanceOverview}> Attendance </Link></MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              <Col md={10} style={{textAlign:"left"}}>
                <MenuItem className="menuItemStyle"><Link to={myConstant.routesConfig.reports}> Report</Link> </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              <Col md={10} style={{textAlign:"left"}}>
                <MenuItem className="menuItemStyle"><Link to={myConstant.routesConfig.resources}> Resources</Link> </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              <Col md={10} style={{textAlign:"left"}}>
                <MenuItem className="menuItemStyle"> Annoucements </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              <Col md={10} style={{textAlign:"left"}}>
                <MenuItem className="menuItemStyle"> Notifications </MenuItem>
              </Col>
            </Row>
          </Menu>
          </SidebarContent>
        </ProSidebar>
        
    </div>
  );
};

export default PrincipalSidebar;
