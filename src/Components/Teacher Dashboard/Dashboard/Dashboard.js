import React, {useEffect} from 'react';
// import './PrincipalDashboard.css'
import { Row, Col, Modal, Dropdown } from "react-bootstrap";
// import DashboardContent from './DashboardContent'
// import DashboardRightPanel from './DashboardRightPanel'
// import {getMasterRoutineData } from '../../ApiClient'
import '../TeacherDashboard.css'
import TeacherSidebar from '../TeacherSidebar';




const TDashboard = () => {
    // useEffect(() => {
    //     apiTesting();
    //   },[])
    
    //   const apiTesting = () => {
    //     getMasterRoutineData()   
    //     .then((res) => console.log(res.data))
    //     .catch((err) => console.log("error occured"))
    //   }
    return ( 
        <>
         <Row>
            <Col md={3} style={{marginTop:"91px", width:"20%"}}>
                <TeacherSidebar />     
            </Col>
            <Col md={6} style={{marginTop:"91px", width:"60%"}}>
            <div className="teacherRoutine">
        <Row
          style={{
            height: "74px",
            boxShadow: "0px 3px 6px #B4B3B329",
            position: "relative",
            left: "12px",
            width: "100%",
          }}
        >
          <Col md={8}>
            <h4>Teacher's LogBook</h4>
          </Col>
          <Col md={2} className="teacherRoutingDD">
            <span>
              <Dropdown>
                <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                  Section
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </Col>
          <Col md={2} className="teacherRoutingDD">
            <span>
              <Dropdown>
                <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                  Class
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </Col>
        </Row>
      </div>

      <div className="dashboardLogbook">
      <Row
          style={{
            height: "74px",
            boxShadow: "0px 3px 6px #B4B3B329",
            position: "relative",
            left: "12px",
            width: "100%",
          }}
        >
          <Col md={8}>
            <h4>Student's Attendance</h4>
          </Col>
          <Col md={2} className="teacherRoutingDD">
            <span>
              <Dropdown>
                <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                  Section
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </Col>
          <Col md={2} className="teacherRoutingDD">
            <span>
              <Dropdown>
                <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                  Class
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </Col>
        </Row>
      </div>
        </Col>
        <Col md={3} style={{marginTop:"91px", width:"20%"}}>
            <Row>
                <Col md={6} className="teacherRightPanel">
                
            <h4>My Schedule</h4>
          
                </Col>

            </Row>

        </Col>
        </Row>
        
        </>
     );
}

export default TDashboard;