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

  const userDetails = JSON.parse(localStorage.getItem('UserData'))

    const [showAddLessonPlan, setShowAddLessonPlan] = useState(false)
    const [lessonPlanData, setLessonPlanData] = useState(false)


    useEffect(() => {
      viewLessonPlan()
    },[])

    const viewLessonPlan = () => {
      // const grade_id = "2"
      // const section_id = "3"
      // const subject_id = "3"
      const teacher_id = userDetails.userid
      getLessonPlan(teacher_id )
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