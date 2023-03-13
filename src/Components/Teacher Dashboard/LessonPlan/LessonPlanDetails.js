import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
// import { FaAngleDown } from 'react-icons/fa';
import AddLessonPlan from './AddLessonPlan';
import { useState } from 'react';


function LessonPlanDetails(props) {
    const [expandCard, setExpandcard] = useState(false)

  return (
    <>
    <Card className='lessonPlanCardHeader'>
      <Card.Body>
        <Row>
            <Col md={5} className="lessonHeading" style={{textAlign:"left"}}>
                <h5>LESSON NAME</h5>
            </Col>
            <Col md={3} className="lessonHeading">
                <h5>GRADE</h5>
            </Col>
            <Col md={3} className="lessonHeading">
                <h5>SUBJECT NAME</h5>
            </Col>
        </Row>
      </Card.Body>
      </Card>
    {
    props?.lesson_plan_data?.message ? <h6 style={{position:"relative", top:"20px"}}>No Lesson Plans Available!!</h6>

    : 

    props?.lesson_plan_data?.map((lessons, indx) => {
        <Card className={expandCard ? 'lessonPlanCardExpanded' : 'lessonPlanCard'}>
      <Card.Body>
        <Row style={{height :expandCard? '66px' : "", boxShadow: expandCard? '0px 3px 6px #B4B3B329' : ""}}>
            <Col md={4} className="lessonName">
                <p>{lessons.subject_name}</p>
            </Col>
            <Col md={3} className="gradeName">
                <p>{lessons.grade}</p>
            </Col>
            <Col md={3} className="subjectName">
                <p>{lessons.subject_name}</p>
            </Col>
            <Col md={2}>
                {/* <FaAngleDown onClick={() => setExpandcard(!expandCard)} /> */}
                <Button onClick={() => setExpandcard(!expandCard)}>Show More</Button>
            </Col>
        </Row>
        {expandCard && <div>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Topic Name:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            {lessons.topic_name}
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Learning Objective:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            {lessons.learning_objectives}
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Teaching Methods:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            {lessons.teaching_methods}
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Learning Outcome:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            {lessons.learning_outcome}
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Teaching Aids:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            {lessons.teaching_aid_references}
            </Col>
        </Row>
        </div>}
      </Card.Body>
      </Card>
    })}
    </>
  );
}

export default LessonPlanDetails;