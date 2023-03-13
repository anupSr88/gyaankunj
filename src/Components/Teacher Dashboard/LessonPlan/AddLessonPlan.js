import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import Select from "react-select";
import {  saveLessonPlan } from "../../../ApiClient";

const AddLessonPlan = (props) => {
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");
  const [teacherName, setTeacherName] = useState();
  const [section, setSection] = useState("");
  const [fullscreen, setFullscreen] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [topicName, setTopicName] = useState("");
  const [lObjective, setLObjective] = useState("");
  const [teachingMethod, setTeachingMethod] = useState("");
  const [learningOutcomes, setLearningOutcomes] = useState("");
  const [teachingAids, setTeachingAids] = useState("");
  const [chapterNo, setChapterNo] = useState('')

  const userDetails = JSON.parse(window.localStorage.getItem('UserData'))

  console.log('subject - ', subject)

  const gradeOptions = [
    {value: "1", label: 1},
    {value: "2", label: 2},
    {value: "3", label: 3},
    {value: "4", label: 4},
    {value: "5", label: 5},
    {value: "6", label: 6},
    {value: "7", label: 7},
    {value: "8", label: 8},
    {value: "9", label: 9},
    {value: "10", label: 10},
   ]

  const subjectOptions = [
    { value: 1, label: "History" },
    { value: 2, label: "Geography" },
    { value: 3, label: "Hindi" },
    { value: 4, label: "English" },
  ];

  const sectionOptions = [
    { value: 1, label: "A" },
    { value: 2, label: "B" },
    { value: 3, label: "C" },
    { value: 4, label: "D" },
  ];

  const createLessonPlan = () => {
    const lessonPlanData = {
      "grade_id": grade,
    "section_id": section,
    "subject_id": subject,
    "teacher_id": userDetails.name,
    "start_date": startDate,
    "end_date": endDate,
    "chapter_id": chapterNo,
    "topic_name": topicName,
    "learning_objectives" : lObjective,
	"teaching_methods": teachingMethod,
	"learning_outcome": learningOutcomes,
	"teaching_aid_references": teachingAids
    }
    saveLessonPlan(lessonPlanData)
      .then((data) => {console.log(data, "data")
      props.onHide()})
      .catch((err) => console.log(err, "err"));
  };

  return (
    <>
      <Modal
        className="ModalBody"
        {...props}
        // size="xl"
        fullscreen={fullscreen}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Lesson Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="addLessonForm">
            <Row style={{ marginBottom: "50px" }}>
              <Col md={3}>
                <span>Grade</span>
                <Select
                  options={gradeOptions}
                  // value={grade}
                  onChange={(e) => setGrade(e.value)}
                  placeholder="Add Grade"
                />
              </Col>
              <Col md={3}>
                <span>Section</span>
                <Select
                  options={sectionOptions}
                  // value={section}
                  onChange={(e) => setSection(e.value)}
                  placeholder="Add Section"
                />
              </Col>
              <Col md={3}>
                <span>Subject</span>
                <Select
                  options={subjectOptions}
                  // value={subject}
                  onChange={(e) => setSubject(e.value)}
                  placeholder="Add Subject"
                />
              </Col>
              <Col md={3}>
                <span>Teacher</span>
                <fieldset disabled>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  
                >
                  <Form.Control type="text" value={userDetails.name} Disabled/>
                </Form.Group>
                </fieldset>
              </Col>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col md={1}></Col>
              <Col md={3}>
                <span>Start Date</span>
                <Form.Control
                  type="date"
                  name="datepic"
                  placeholder="DateRange"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Col>
              <Col md={4}></Col>
              <Col md={3}>
                <span>End Date</span>
                <Form.Control
                  type="date"
                  name="datepic"
                  placeholder="DateRange"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Col>
              <Col md={1}></Col>
            </Row>
            <Row>
              <Col md={2}>
                <span>Chapter Number:</span>
              </Col>
              <Col md={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  value={chapterNo}
                  onChange={(e) => setChapterNo(e.target.value)}
                >
                  <Form.Control type="text" placeholder="Chapter Number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <span>Topic Name:</span>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  value={topicName}
                  onChange={(e) => setTopicName(e.target.value)}
                >
                  <Form.Control type="text" placeholder="Topic Name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <span>Learning Objective:</span>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder=" Learning Objective"
                    value={lObjective}
                    onChange={(e) => setLObjective(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <span>Teaching Methods:</span>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Teaching Methods"
                    value={teachingMethod}
                    onChange={(e) => setTeachingMethod(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <span>Learning Outcome:</span>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Learning Outcome"
                    value={learningOutcomes}
                    onChange={(e) => setLearningOutcomes(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <span>Teaching Aids:</span>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Teaching Aids"
                    value={teachingAids}
                    onChange={(e) => setTeachingAids(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" style={{ alignItems: "center" }}>
            Reset
          </Button>
          <Button variant="outline-primary" onClick={createLessonPlan}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddLessonPlan;
