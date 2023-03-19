import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col, Table } from "react-bootstrap";
import Select from 'react-select'
import { createMasterRoutine, getMasterRoutineData } from '../../../ApiClient'
import './MasterRoutine.css'
import {v4 as uuid} from 'uuid';


const AddRoutine = (props) => {

  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [teacherName, setTeacherName] = useState()
  const [period, setPeriod] = useState('')
  const [section, setSection] = useState('')
  const [day, setDay] = useState('')
  const [dataToAddRoutine, setDataToAddRoutine] = useState([])
  const [enableSubmitButton, setEnableSubmitButton] = useState(false)

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
    { value: '1', label: 'History' },
    { value: '2', label: 'Geography' },
    { value: '3', label: 'Hindi' },
    { value: '4', label: 'English' }
  ]

  const teacherOptions = [
    { value: 'TEACHER_1', label: 'Julie' },
    { value: 'TEACHER_2', label: 'S.K. Tripathy' },
    { value: 'TEACHER_3', label: 'Khan Sir' }
  ]

  const periodOptions = [
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

  const dayOption = [
    {value: "Monday", label: "Monday"},
    {value: "Tuesday", label: "Tuesday"},
    {value: "Wednesday", label: "Wednesday"},
    {value: "Thursday", label: "Thursday"},
    {value: "Friday", label: "Friday"},
  ]

  const sectionOptions = [
    { value: '1', label: 'A' },
    { value: '2', label: 'B' },
    { value: '3', label: 'C' },
    { value: '4', label: 'D' }
  ]

  const handleGradeChange = (e) => {
    setGrade(e.value)
  }

  const handleSubjectChange = (e) => {
    setSubject(e.value)
  }

  const handleTeacherChange = (e) => {
    setTeacherName(e.value)
  }

  const handlePeriodChange = (e) => {
    setPeriod(e.value)
  }

  const handleSectionChange = (e) => {
    setSection(e.value)
  }

  const handleDayChange = (e) => {
    setDay(e.value)
  }

  const postRoutineData = () => {
    const postData = {
      "day": day,
      "values":[
         {
            "grade_id": grade,
            "period": period,
            "subject_id": subject,
            "teacher_id":teacherName,
            "section_id": section
         }
      ],
      "start_date": "",
      "end_date": ""
    }

    createMasterRoutine(postData)
    .then((res) => {
      console.log("PostData - ",  res)
    })
    .catch((err) => console.log("PostData err - ",  err))
  }

  

  const addRoutineDetails = (e) => {
    e.preventDefault();

    let ids = uuid()
    const uniqueId = ids.slice(0,8)

    let newMember = [...dataToAddRoutine]
   let newData = {
    formId: uniqueId,
      formGrade :  grade,
    formPeriod :  period,
    formSubject :  subject,
    formTeacher : teacherName,
    formSection : section,
    formDay : day
    }

    newMember = [...newMember, newData]

    setDataToAddRoutine(newMember)
    postRoutineData();
  }

  const closeAddModal = () => {
    props.onHide();
  }
  
  return (
    <>
      <Modal
        className="ModalBody"
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Master Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row style={{marginBottom: "10px"}}>
              <Col md={5}>
                <span>Add Grade</span>
                <Select options={gradeOptions} onChange={e => handleGradeChange(e)} />
              </Col>
              <Col md={2}>
              </Col>
              <Col md={5}>
                <span>Add Subject</span>
                <Select options={subjectOptions} onChange={e => handleSubjectChange(e)} />
              </Col>
            </Row>
            <Row style={{marginBottom: "10px"}}>
              <Col md={5}>
                <span>Teacher Name</span>
                <Select options={teacherOptions} onChange={e => handleTeacherChange(e)} />
              </Col>
              <Col md={2}>
              </Col>
              <Col md={5}>
                <span>Add Period</span>
                <Select options={periodOptions} onChange={e => handlePeriodChange(e)} />
              </Col>
            </Row>
            <Row style={{marginBottom: "10px"}}>
              <Col md={5}>
                <span>Add Section</span>
                <Select options={sectionOptions} onChange={e => handleSectionChange(e)} />
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <span>Add Week Day</span>
                <Select options={dayOption} onChange={e => handleDayChange(e)} />
              </Col>
            </Row>
            <Row style={{marginBottom: "10px"}}>
              <Col md={9}>

              </Col>
              <Col md={3}>
                <Button variant="outline-success" type="submit" onClick={(e) => addRoutineDetails(e)}>Add to Master Routine</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
              <Table striped bordered hover>
      <thead>
        <tr className="MRTableHeader">
          <th>Grade</th>
          <th>Section</th>
          <th>Period</th>
          <th>Teacher Name</th>
          <th>Subject Name</th>
          <th>Weekday</th>
          <th>Action</th>
        </tr>
      </thead>
      {dataToAddRoutine?.map((data, indx) => {
        return <tbody>
        <tr>
          <td>{data.formGrade}</td>
          <td>{data.formSection}</td>
          <td>{data.formPeriod}</td>
          <td>{data.formTeacher}</td>
          <td>{data.formSubject}</td>
          <td>{data.formDay}</td>
          <td><Button variant="primary">Edit</Button><Button variant="danger" style={{position:"relative", left:"40px"}}>Delete</Button></td>
          
        </tr>
      </tbody>
      })}
    </Table>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" style={{alignItems:"center"}}>Reset</Button>
          <Button variant="outline-primary" onClick={closeAddModal}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRoutine;
