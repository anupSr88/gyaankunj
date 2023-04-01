import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col, Table } from "react-bootstrap";
import Select from 'react-select'
import { createMasterRoutine, getTeachersData } from '../../../ApiClient'
import './MasterRoutine.css'
import {v4 as uuid} from 'uuid';
import AsyncSelect from 'react-select/async';


const AddRoutine = (props) => {

  const [grade, setGrade] = useState('')
  const [subject, setSubject] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const [periodData, setPeriodData] = useState('')
  const [section, setSection] = useState('')
  const [dayData, setDayData] = useState('')
  const [dataToAddRoutine, setDataToAddRoutine] = useState([])
  const [enableSubmitButton, setEnableSubmitButton] = useState(false)
  const [teacherData, setTeacherData] = useState({})
  const [selectedValue, setSelectedValue] = useState(null);


  useEffect(() => {
    getAllTeachersData()
  },[])

  const getAllTeachersData = () => {
    getTeachersData()
    .then((res) => {
      setTeacherData(res.data)
      // const teacherData = res.data
      // return teacherData;
    })
    // .catch((err) => console.log("Teachers err - ",  err))
  }

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

  const sectionOptions = [
    { value: '1', label: 'A' },
    { value: '2', label: 'B' },
    { value: '3', label: 'C' },
    { value: '4', label: 'D' }
  ]
 
  const subjectOptions = [
    { value: '1', label: 'History' },
    { value: '2', label: 'Geography' },
    { value: '3', label: 'Hindi' },
    { value: '4', label: 'English' }
  ]

  const periodOptions = [
    {value: "1", label: 1},
   {value: "2", label: 2},
   {value: "3", label: 3},
   {value: "4", label: 4},
   {value: "5", label: 5},
   {value: "6", label: 6},
   {value: "7", label: 7},
   {value: "8", label: 8}
  ]

  const dayOption = [
    {value: "Monday", label: "Monday"},
    {value: "Tuesday", label: "Tuesday"},
    {value: "Wednesday", label: "Wednesday"},
    {value: "Thursday", label: "Thursday"},
    {value: "Friday", label: "Friday"},
  ]



  const handleGradeChange = (e) => {
    setGrade(e.target.value)
  }

  const handleSubjectChange = (e) => {
    setSubject(e.target.value)
  }

  const handleTeacherChange = (e) => {
    setTeacherName(e.target.value)
  }

  // const handleChange = value => {
  //   setSelectedValue(value);
  // }

  const handlePeriodChange = (e) => {
    setPeriodData(e.target.value)
  }

  const handleSectionChange = (e) => {
    setSection(e.target.value)
  }

  const handleDayChange = (e) => {
    setDayData(e.target.value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const postRoutineData = () => {

    createMasterRoutine(dataToAddRoutine)
    .then((res) => {
      console.log("PostData - ",  res)
    })
    .catch((err) => console.log("PostData err - ",  err))
  }

  

  const addRoutineDetails = () => {

    let ids = uuid()
    const uniqueId = ids.slice(0,8)

    let newMember = [...dataToAddRoutine]
   let newData = { 
    day : dayData,
    "values":[
      {
        grade_id : grade,
        period : periodData,
        subject_id : subject,
        teacher_id : teacherName,
        section_id : section,
      }
   ],
   "start_date": "",
   "end_date": ""
    }

    newMember = [...newMember, newData]

    setDataToAddRoutine(newMember)
    // postRoutineData();
  }

  const closeAddModal = () => {
    postRoutineData();
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
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Row style={{ marginBottom: "10px" }}>
              <Col md={5} style={{paddingLeft:"25%"}}>
                <h6>Add Grade</h6>
                {/* <Select
                  options={gradeOptions}
                  onChange={(e) => handleGradeChange(e)}
                /> */}
                <select className="teacherBlock" name="grade" id="grade" onChange = {(e) => handleGradeChange(e)}>
                <option value="">--Grade--</option>
                  {gradeOptions?.map((grade) => {
                    return <option value={grade?.value}>{grade?.label}</option>
                  })}
                </select>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <h6>Add Subject</h6>
                <select className="teacherBlock" name="subject" id="subject" onChange = {(e) => handleSubjectChange(e)}>
                <option value="">--Subject--</option>
                  {subjectOptions?.map((subject) => {
                    return <option value={subject?.value}>{subject?.label}</option>
                  })}
                </select>
              </Col>
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              <Col md={5} style={{paddingLeft:"25%"}}>
                <h6>Teacher Name</h6>
                {/* <AsyncSelect
                cacheOptions
                defaultOptions
                value={selectedValue}
                loadOptions={getAllTeachersData}
                getOptionLabel={e => e.teacher_name}
                getOptionValue={e => e.teacher_id}
                onInputChange={handleTeacherChange}
                 onChange={handleChange} /> */}

                <select className="teacherBlock" name="teacher" id="teacher" onChange = {(e) => handleTeacherChange(e)}>
                <option value="">--Teacher--</option>
                  {teacherData?.teachers?.map((teacher) => {
                    return <option value={teacher.teacher_id}>{teacher.teacher_name}</option>
                  })}
                </select>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <h6>Add Period</h6>
                <select className="teacherBlock" name="period" id="period" onChange = {(e) => handlePeriodChange(e)}>
                <option value="">--Period--</option>
                  {periodOptions?.map((period) => {
                    return <option value={period.value}>{period.label}</option>
                  })}
                </select>
              </Col>
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              <Col md={5} style={{paddingLeft:"25%"}}>
                <h6>Add Section</h6>
                {/* <Select
                  options={sectionOptions}
                  onChange={(e) => handleSectionChange(e)}
                /> */}
                <select className="teacherBlock" name="section" id="section" onChange = {(e) => handleSectionChange(e)}>
                <option value="">--Section--</option>
                  {sectionOptions?.map((section) => {
                    return <option value={section.value}>{section.label}</option>
                  })}
                </select>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <h6>Add Week Day</h6>
                {/* <Select
                  options={dayOption}
                  onChange={(e) => handleDayChange(e)}
                /> */}
                <select className="teacherBlock" name="day" id="day" onChange = {(e) => handleDayChange(e)}>
                <option value="">--Week Day--</option>
                  {dayOption?.map((day) => {
                    return <option value={day.value}>{day.label}</option>
                  })}
                </select>
              </Col>
            </Row>
            <Row style={{ marginBottom: "10px" }}>
              <Col md={9}></Col>
              <Col md={3}>
                <Button
                  variant="outline-success"
                  type="submit"
                  onClick={(e) => addRoutineDetails()}
                >
                  Add to Master Routine
                </Button>
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
                    return (
                      <tbody>
                        <tr>
                          <td>{data.grade_id}</td>
                          <td>{data.section_id}</td>
                          <td>{data.period}</td>
                          <td>{data.teacher_id}</td>
                          <td>{data.subject_id}</td>
                          <td>{data.day}</td>
                          <td>
                            <Button variant="primary">Edit</Button>
                            <Button
                              variant="danger"
                              style={{ position: "relative", left: "40px" }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" style={{ alignItems: "center" }}>
            Reset
          </Button>
          <Button variant="outline-primary" onClick={closeAddModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddRoutine;
