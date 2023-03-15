import React, { useEffect, useState } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './LessonPlan.css'
import LessonPlanPrinciView from './LessonPlanForPrincipal'
import {getLessonPlan } from '../../../ApiClient'
import PrincipalSidebar from '../PrincipalSidebar';

const TLessonPlan = () => {

    const [showAddLessonPlan, setShowAddLessonPlan] = useState(false)
    const [lessonPlanData, setLessonPlanData] = useState(false)

    useEffect(() => {
      viewLessonPlan()
    },[])

    const handleShowPlanModal = () => {
        setShowAddLessonPlan(true)
    }

    const viewLessonPlan = () => {
      const grade_id = "1"
      const section_id = "1"
      const subject_id = 1
      getLessonPlan(grade_id, section_id,subject_id )
      .then((res) => setLessonPlanData(res.data))
      .catch((err) => console.log(err))
    }

    return (
      <>
      <Row>
            <Col md={3} style={{marginTop:"91px", width:"20%"}}>
                <PrincipalSidebar />     
            </Col>
            <Col md={9} style={{width:"80%"}}>
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
              <LessonPlanPrinciView lessonPlanData={lessonPlanData} />
            </div>
          </div>
        </div>
        </Col>
        </Row>
      </>
    );
}

export default TLessonPlan;