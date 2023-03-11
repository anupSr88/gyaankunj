import React from 'react';
import './PrincipalDashboard.css'
import PrincipalSidebar from './PrincipalSidebar'
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard'
import MasterRoutine from './MasterRoutine/MasterRoutine';
import AttendanceOverview from './Attendance/AttendanceOverview';
import ReportSection from './Reports/Reports';
import LessonPlan from './Lesson Plan/LessonPlan';
import Resources from './Resources/ResourcesList';
import Notifications from './Notifications/Notifications';
import { Row, Col, Modal } from "react-bootstrap";
import Announcements from './Announcement/Announcement';

const PrincipalDashboard = () => {
    return (
      <>
        <Row className="dflex">
          <Col md={3} className="dashboardMain" style={{width:"20%"}}>
            <PrincipalSidebar />
          </Col>
          <Col md={9} style={{width:"80%"}}>
          <Switch>
            <Route path="/principalDashboard/Dashboard" component={Dashboard} />
            <Route
              path="/principalDashboard/masterRoutine"
              component={MasterRoutine}
            />
            <Route
              path="/principalDashboard/LessonPlan"
              component={LessonPlan}
            />
             <Route
              path="/principalDashboard/AttendanceOverview"
              component={AttendanceOverview}
            />
            <Route
              path="/principalDashboard/Reports"
              component={ReportSection}
            />
            <Route
              path="/principalDashboard/Resources"
              component={Resources}
            />
            <Route
              path="/principalDashboard/Announcements"
              component={Announcements}
            />
            <Route
              path="/principalDashboard/Notifications"
              component={Notifications}
            />
          </Switch>
          </Col>
        </Row>
      </>
    );
}

export default PrincipalDashboard;