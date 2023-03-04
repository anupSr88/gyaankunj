import React from 'react';
import './TeacherDashboard.css'
import TDashboard from '../Teacher Dashboard/Dashboard/Dashboard'
import Classes from '../Teacher Dashboard/Classes/Classes'
import { Row, Col, Modal } from "react-bootstrap";
import { Router, Route, Switch } from "react-router-dom";
import TeacherSidebar from './TeacherSidebar'
import LogBook from './LogBook/LogBook'

const TeacherDashboard = () => {
    return (
      <>
        <Row className="dflex">
          <Col md={3} className="dashboardMain" style={{width:"20%"}}>
            <TeacherSidebar />
          </Col>
          <Col md={9} style={{width:"80%"}}>
          <Switch>
            <Route path="/teacherDashboard/Dashboard" component={TDashboard} />
            <Route path="/teacherDashboard/Classes"   component={Classes} />
            <Route
              path="/teacherDashboard/LogBook"
              component={LogBook}
            />
             {/* <Route
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
            /> */}
          </Switch>
          </Col>
        </Row>
      </>
    );
}

export default TeacherDashboard;