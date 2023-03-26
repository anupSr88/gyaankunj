import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import Select from "react-select";
import { createLogBook } from "../../../ApiClient";

const AddLogBook = (props) => {
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [teacherName, setTeacherName] = useState();
  const [period, setPeriod] = useState("");
  const [section, setSection] = useState("");
  const [contentTaught, setContentTaught] = useState('')
  const [homework, setHomework] = useState('')

  const userDetails = JSON.parse(localStorage.getItem('UserData'))

  const gradeOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const subjectOptions = [
    { value: "History", label: "History" },
    { value: "Geography", label: "Geography" },
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
  ];

  const teacherOptions = [
    { value: "Julie", label: "Julie" },
    { value: "S.K. Tripathy", label: "S.K. Tripathy" },
    { value: "Khan Sir", label: "Khan Sir" },
  ];

  const periodOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" }
  ];

  const sectionOptions = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
  ];

  const addLogBookData = () => {
    const logbookDetails = {
      "grade_id": grade,
      "section_id": section,
      "period": period,
      "subject_id": subject,
      "teacher_id": userDetails.userid,
      "content_taught": contentTaught,
      "home_work": homework,
      "date": "2022-12-23",
      "absentees":["STUD_1", "STUD_2"],
      "dress_defaulters": ["STUD_3", "STUD_4"]
    }
    createLogBook(logbookDetails)
    .then((res) => {console.log("Logbook added - ", res.data)
    props.closeAndLoad()})
    .catch((err) => console.log("Logbook Error - ", err))
  }

  return (
    <>
      <Modal
        className="ModalBody"
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add LogBook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={5}>
                <span>Add Grade</span>
                <Select
                  options={gradeOptions}
                  
                  onChange={(e) => setGrade(e.value)}
                />
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Content Taught</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Add Content Taught"
                    
                  onChange={(e) => setContentTaught(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col md={5}>
                <span>Add Period</span>
                <Select options={periodOptions}
                  onChange={(e) => setPeriod(e.value)} />
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Add Homework</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter Homework given"
                    // value={grade}
                  onChange={(e) => setHomework(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <span>Add Section</span>
                <Select options={sectionOptions} onChange={(e) => setSection(e.value)}/>
              </Col>
              
            </Row>
            <Row>
              <Col md={5}>
                <span>Add Subject</span>
                <Select options={subjectOptions} onChange={(e) => setSubject(e.value)} />
              </Col>
              
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="outline-primary" style={{ alignItems: "center" }} onClick={resetData}>
            Reset
          </Button> */}
          <Button variant="outline-primary" onClick={addLogBookData}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddLogBook;
