import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Dropdown, Button, Table } from "react-bootstrap";
// import { FaAngleDown } from 'react-icons/fa';
import { useState } from 'react';


function LessonPlanPrinciView() {
    const [expandCard, setExpandcard] = useState(false)

    console.log("expandCard = ", expandCard)
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
    <Card className={expandCard ? 'lessonPlanCardExpanded' : 'lessonPlanCard'}>
      <Card.Body>
        <Row style={{height :expandCard? '66px' : "", boxShadow: expandCard? '0px 3px 6px #B4B3B329' : ""}}>
            <Col md={5} className="lessonName">
                <p>Geometry</p>
            </Col>
            <Col md={3} className="gradeName">
                <p>1</p>
            </Col>
            <Col md={3} className="subjectName">
                <p>Maths</p>
            </Col>
            <Col md={1}>
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
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Learning Objective:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Teaching Methods:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Learning Outcome:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </Col>
        </Row>
        <Row className="lessonData">
            <Col md={4} style={{textAlign: "left"}}>
                Teaching Aids:
            </Col>
            <Col md={6} style={{textAlign: "left"}}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </Col>
        </Row>
        </div>}
      </Card.Body>
      </Card>
    </>
  );
}

export default LessonPlanPrinciView;