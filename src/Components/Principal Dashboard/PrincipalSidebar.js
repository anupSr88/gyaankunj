import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  ProSidebar,
  ProSidebarProvider,
} from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css'
import "./PrincipalSidebar.css";
import dashboardImg from "../../Images/dashboardImg.svg";
import masterRoutine from "../../Images/MasterRoutine.png";
import LessonPlan from "../../Images/LessonPlan.png";
import Attendance from "../../Images/Attendance.png";
import Reports from "../../Images/Reports.png";
import Resources from "../../Images/Resources.png";
import Announcements from "../../Images/Announcements.png";
import Notifications from "../../Images/Notifications.png";
import SidebarBackground from "../../Images/SidebarBackground_1.png";
import { Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import * as myConstant from "../fileConstant";
import { useEffect, useState } from "react";

const loadIndex = {
  "/principalDashboard/Dashboard": 0,
  "/principalDashboard/masterRoutine": 1,
  "/principalDashboard/LessonPlan": 2,
  "/principalDashboard/AttendanceOverview": 3,
  "/principalDashboard/Reports": 4,
  "/principalDashboard/Resources": 5,
  "/principalDashboard/Announcements": 6,
  "/principalDashboard/Notifications": 7,
};

const PrincipalSidebar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const activeIndex = loadIndex[history.location.pathname];
    setActiveTab(activeIndex);
  }, [history.location.pathname]);

  function handleActive(indx) {
    setActiveTab(indx);
  }


  return (
    <div
      className="sidebarStyling"
      style={{ background: `url(${SidebarBackground})`, height: "991px" }}
    >
      <ProSidebar>
        <SidebarContent>
          <Menu className="sidebarMenu">
            <Row className="sidebarMenuInner" style={{backgroundColor : activeTab == 0 ? "#FFFFFF" : ""}}>
              <Col md={2}>
                <img alt="close" src={dashboardImg} />
              </Col>
              
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem
                  active={activeTab == 0 ? true : false}
                  onClick={() => handleActive(0)}
                  className="menuItemStyle"
                >
                  <Link to={myConstant.routesConfig.dashboard}>Dashboard
                    </Link>
                </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={masterRoutine} />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem className="menuItemStyle">
                  <Link to={myConstant.routesConfig.masterRoutine}>
                    Master Routine
                  </Link>
                </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={LessonPlan} />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem className="menuItemStyle">
                  <Link to={myConstant.routesConfig.lessonPlan}>
                    {" "}
                    Lesson Plan
                  </Link>{" "}
                </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={Attendance} />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem className="menuItemStyle">
                  <Link to={myConstant.routesConfig.attendanceOverview}>
                    {" "}
                    Attendance{" "}
                  </Link>
                </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={Reports} />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem disabled className="menuItemStyle">
                  <Link to={myConstant.routesConfig.reports}> Report</Link>{" "}
                </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={Resources} />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem className="menuItemStyle">
                  <Link to={myConstant.routesConfig.resources}> Resources</Link>{" "}
                </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={Announcements} />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem className="menuItemStyle">
                  <Link to={myConstant.routesConfig.announcement}>
                    {" "}
                    Notice{" "}
                  </Link>
                </MenuItem>
              </Col>
            </Row>
            <Row className="sidebarMenuInner">
              <Col md={2}>
                <img alt="close" src={Notifications} />
              </Col>
              <Col md={10} style={{ textAlign: "left" }}>
                <MenuItem className="menuItemStyle">
                  <Link to={myConstant.routesConfig.notifications}>
                    {" "}
                    Notifications{" "}
                  </Link>{" "}
                </MenuItem>
              </Col>
            </Row>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default PrincipalSidebar;
