import React, { useEffect, useState } from "react";
import './StudentDashboard.css'
import StudentSidebar from "./StudentSidebar";
import { Row, Col, ButtonGroup, ToggleButton, Dropdown, Card, Form } from "react-bootstrap";
// import {attendanceOverview, getGradeDetails } from '../../ApiClient'
import Select from 'react-select'
// import PrincipalLogBook from "./PrincipalLogbook";





const StudentDashboard = () => {
    const [checked, setChecked] = useState(false);
const [radioValue, setRadioValue] = useState('1');
const [tableData, setTableData] = useState([])
const [overallAttendance, setOverallAttendance] = useState({})
const [grade, setGrade] = useState('')
const [section, setSection] = useState('1')
const [gradeData, setGradeData] = useState([])
const [weekDayToFetch, setWeekDayToFetch] = useState('')

// useEffect(() => {
//     getAttendanceOverview()
//     getAllGradeDetails()
// },[grade, section])

// const gradeOptions = [
//   {value: "1", label: 1},
//   {value: "2", label: 2},
//   {value: "3", label: 3},
//   {value: "4", label: 4},
//   {value: "5", label: 5},
//   {value: "6", label: 6},
//   {value: "7", label: 7},
//   {value: "8", label: 8},
//   {value: "9", label: 9},
//   {value: "10", label: 10},
//  ]

// const radios = [
//   { name: "A", value: "1" },
//   { name: "B", value: "2" },
//   { name: "C", value: "3" },
//   { name: "D", value: "4" },
// ];

// const column = [
//   { field:"Period", value:"Period" },
//   { field:"Students present", value:"Student Present" },
//   { field:"Subject", value:"Subject" },
//   { field:"Content taught", value:"Content Taught" },
//   { field:"Homework", value:"Homework" },
//   { field:"Absentees", value:"Absent" },
// ]

// const routineColumn = [
//   { field:"1st", value: "Subject"},
//   { field:"2nd", value: "Subject"},
//   { field:"3rd", value: "Subject"},
//   { field:"4th", value: "Subject"},
//   { field:"Break", value: "Subject"},
//   { field:"5th", value: "Subject"},
//   { field:"6th", value: "Subject"},
//   { field:"7th", value: "Subject"},
//   { field:"8th", value: "Subject"},
// ]

// const routineRow = [
//   {field:"Hindi", value: "Hindi"},
//   {field:"Time", value: "Time"},
//   {field:"Teacher", value: "Teacher"}
// ]

// const handleGradeChange = (e) => {
// setGrade(e.value)
// }

// const handleSectionChange = (e) => {
// console.log("e -", e)
// setSection(e.target.defaultValue)
// setRadioValue(e.currentTarget.value)
// }

// // const getAttendanceOverview = () => {
// // const grade_id = grade
// //   const section_id = section
// // attendanceOverview(grade_id, section_id)
// // .then((res) => setOverallAttendance(res.data))
// // .then((err) => console.log(err))
// // }

// const getAllGradeDetails = () => {
// getGradeDetails()
// .then((res) => console.log("grade Data - ",res.data))
// .then((err) => console.log(err))
// }


const weekDayOption = [
    {value: "Monday", label: "Monday"},
    {value: "Tuesday", label: "Tuesday"},
    {value: "Wednesday", label: "Wednesday"},
    {value: "Thursday", label: "Thursday"},
    {value: "Friday", label: "Friday"},
  ]

//   const handlesectionToFetchLog = (e) => {
//     setSectionToFetchLog(e.value)
//   }

//   const handlegradeToFetchLog = (e) => {
//     setGradeToFetchLog(e.value)
//   }

  const handleWeekDayChange = (e) => {
    setWeekDayToFetch(e.value)
    // fetchTeacherRoutine()
  }
    return ( 
        <>
        <Row>
          <Col md={3} style={{ marginTop: "91px"}}>
            <StudentSidebar />
          </Col>
          <Col md={6} style={{ marginTop: "91px"}}>
            

            
          </Col>
          <Col md={3} style={{ marginTop: "91px"}}>
            <Row>
              <Col md={6} className="teacherRightPanel">
                <Row className="teacherRightPanel-header">
                  <Col md={6}>
                    <h4>My Schedule</h4>
                  </Col>
                  <Col md={6}>
                    <Select
                      placeholder="Day"
                      isSearchable={false}
                      options={weekDayOption}
                      onChange={(e) => handleWeekDayChange(e)}
                      // onClick={fetchTeacherRoutine}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    {/* {teacherRoutineData?.time_table ? teacherRoutineData?.time_table?.map((routine, indx) => {
                      return (
                        <Card
                          style={{
                            height: "81px",
                            marginBottom: "5px",
                            backgroundColor: "#0DCAF0",
                          }}
                        >
                          <Card.Body>
                            <span style={{
                                font: "normal normal normal 14px/21px Roboto",
                                letterSpacing: " 0px",
                                color: "white",
                              }}>{`${routine.time_range} --- ${routine.subject_name}--${routine.grade}${routine.section_name}`}</span>
                          </Card.Body>
                        </Card>
                      );
                    })
                  :
                  <p>{teacherRoutineData?.message}</p>} */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        
        
        </>
     );
}

export default StudentDashboard;