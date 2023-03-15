import React, { useState, useEffect } from 'react';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
import './LessonPlan.css'
import SamplePdf from '../../../Images/MSAK.pdf'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import AddLessonPlan from './AddLessonPlan';
import LessonPlanDetails from './LessonPlanDetails'
import {getLessonPlan } from '../../../ApiClient'
import TeacherSidebar from '../TeacherSidebar';

const TLessonPlan = () => {

    const [showAddLessonPlan, setShowAddLessonPlan] = useState(false)
    const [lessonPlanData, setLessonPlanData] = useState(false)

    useEffect(() => {
      viewLessonPlan()
    },[])

    const viewLessonPlan = () => {
      const grade_id = "6"
      const section_id = "4"
      const subject_id = "2"
      getLessonPlan(grade_id, section_id,subject_id)
      .then((res) => setLessonPlanData(res.data))
      .catch((err) => console.log(err))
    }

    const handleShowPlanModal = () => {
        setShowAddLessonPlan(true)
    }

    const closeAndLoad = () => {
      setShowAddLessonPlan(false)
      viewLessonPlan()
    }

    return (
      <>
      <Row>
            <Col md={3} style={{marginTop:"91px", width:"20%"}}>
                <TeacherSidebar />     
            </Col>
            <Col md={9} style={{width:"80%"}}>
        <div className="routinemain">
          <div className="masterRoutineheader">
            <Row>
              <Col md={9} style={{ textAlign: "left", paddingLeft: "50px" }}>
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
              <Col md={3}>
                <Button variant="outline-primary" onClick={handleShowPlanModal}>
                  + Add Lesson Plan
                </Button>{" "}
              </Col>
              
            </Row>
          </div>
          <div className="routineSection">
            <div className='lessonPlanDetails'>
              <LessonPlanDetails lessonPlanData={lessonPlanData} />
            </div>
          </div>
        </div>
        </Col>
        {showAddLessonPlan && <AddLessonPlan show={showAddLessonPlan} onHide={closeAndLoad} />}
        </Row>
      </>
    );
}

export default TLessonPlan;