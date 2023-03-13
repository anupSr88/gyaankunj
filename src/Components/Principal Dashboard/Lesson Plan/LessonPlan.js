import React, { useState } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './LessonPlan.css'
import LessonPlanPrinciView from './LessonPlanForPrincipal'

const TLessonPlan = () => {

    const [showAddLessonPlan, setShowAddLessonPlan] = useState(false)

    const handleShowPlanModal = () => {
        setShowAddLessonPlan(true)
    }

    return (
      <>
        <div className="routinemain">
          <div className="masterRoutineheader">
            <Row>
              <Col md={10} style={{ textAlign: "left", paddingLeft: "50px" }}>
                <h3>Lesson Plan</h3>
              </Col>
              {/* <Col md={2}>
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdownHead"
                      id="dropdown-basic"
                    >
                      Select Section
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </Col>
              <Col md={2}>
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdownHead"
                      id="dropdown-basic"
                    >
                      Select Class
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </Col>
              <Col md={2}>
                <span>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="dropdownHead"
                      id="dropdown-basic"
                    >
                      Select Subject
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </Col> */}
              
            </Row>
          </div>
          <div className="routineSection">
            <div className='lessonPlanDetails'>
              <LessonPlanPrinciView />
            </div>
          </div>
        </div>
      </>
    );
}

export default TLessonPlan;