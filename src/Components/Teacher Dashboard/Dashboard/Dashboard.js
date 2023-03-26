import React, {useEffect, useState} from 'react';
// import './PrincipalDashboard.css'
import { Row, Col, Modal, Dropdown, Table, Form, Button, Card } from "react-bootstrap";
// import DashboardContent from './DashboardContent'
// import DashboardRightPanel from './DashboardRightPanel'
import {viewLogBook, getTeacherRoutine, getAllStudentsData } from '../../../ApiClient'
import '../TeacherDashboard.css'
import TeacherSidebar from '../TeacherSidebar';
import Select from 'react-select'
import dashboardCardBg from '../../../Images/Rectangle_142062.svg'

const TDashboard = () => {
    const [dateToFetchLog, setDateToFetchLog] = useState('')
    const [gradeToFetchLog, setGradeToFetchLog] = useState('')
    const [sectionToFetchLog, setSectionToFetchLog] = useState('')
    const [startDate, setStartDate] = useState("");
    const [logBookDetails, setLogBookDetails] = useState('')
    const [weekDayToFetch, setWeekDayToFetch] = useState('')
    const [teacherRoutineData, setTeacherRoutineData] = useState({})
    const [studentDetails, setStudentDetails] = useState({})

    useEffect(() => {
        // getLogBook()
        // fetchTeacherRoutine()
        getAllStudents()
    }, [])

    const userDetails = JSON.parse(window.localStorage.getItem('UserData'))

    const getLogBook = () => {
        const date = dateToFetchLog
        const grade = gradeToFetchLog
        const section = sectionToFetchLog
        viewLogBook(date, grade, section)
        .then((res) => setLogBookDetails(res.data))
        .catch((err) => console.log(err))
    }

    const fetchTeacherRoutine = () => {
      const userId = userDetails.userid
      const day = weekDayToFetch
      // const userId = "EMP2"  
      // const day = "Wednesday"
      getTeacherRoutine(userId, day)
      .then((res) => setTeacherRoutineData(res.data))
      .catch((err) => console.log(err, "errorTeacher"))
    }

    const getAllStudents = () => {
      const grade = "1"
        const section = "1"
      getAllStudentsData(grade, section)
      .then((res) => setStudentDetails(res.data))
      .catch((err) => console.log(err))
    }

    console.log("studentDetails - ", studentDetails)

    const classOptions = [
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
        {value: 5, label: 5},
        {value: 6, label: 6},
        {value: 7, label: 7},
        {value: 8, label: 8},
        {value: 9, label: 9},
        {value: 10, label: 10},
       ]
    
      const sectionOptions = [
        { value: '1', label: 'A' },
        { value: '2', label: 'B' },
        { value: '3', label: 'C' },
        { value: '4', label: 'D' }
      ]


      const weekDayOption = [
        {value: "Monday", label: "Monday"},
        {value: "Tuesday", label: "Tuesday"},
        {value: "Wednesday", label: "Wednesday"},
        {value: "Thursday", label: "Thursday"},
        {value: "Friday", label: "Friday"},
      ]



      const handlesectionToFetchLog = (e) => {
        setSectionToFetchLog(e.value)
      }
    
      const handlegradeToFetchLog = (e) => {
        setGradeToFetchLog(e.value)
      }

      const handleWeekDayChange = (e) => {
        setWeekDayToFetch(e.value)
        fetchTeacherRoutine()
      }

      console.log('weekDayToFetch - ', weekDayToFetch)

    return (
      <>
        <Row>
          <Col md={3} style={{ marginTop: "91px", width: "20%" }}>
            <TeacherSidebar />
          </Col>
          <Col md={6} style={{ marginTop: "91px", width: "60%" }}>
            <div className="teacherRoutine" style={{ height: "300px" }}>
              <Row
                style={{
                  height: "74px",
                  boxShadow: "0px 3px 6px #B4B3B329",
                  position: "relative",
                  left: "12px",
                  width: "100%",
                }}
              >
                <Col md={4}>
                  <h4>LogBook</h4>
                </Col>
                <Col md={2} className="teacherRoutingDD">
                  <span>
                    <Select
                      placeholder="Section"
                      isSearchable={false}
                      options={sectionOptions}
                      onChange={(e) => handlesectionToFetchLog(e)}
                    />
                  </span>
                </Col>
                <Col md={2} className="teacherRoutingDD">
                  <span>
                    <Select
                      placeholder="Class"
                      isSearchable={false}
                      options={classOptions}
                      onChange={(e) => handlegradeToFetchLog(e)}
                    />
                  </span>
                </Col>
                <Col md={2} style={{ marginTop: "17px" }}>
                  <Form.Control
                    type="date"
                    name="datepic"
                    placeholder="DateRange"
                    value={dateToFetchLog}
                    onChange={(e) => setDateToFetchLog(e.target.value)}
                  />
                </Col>
                <Col md={1} style={{ paddingTop: "17px" }}>
                  <Button variant="outline-primary" onClick={getLogBook}>
                    Search
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <span style={{ font: "normal normal bold 13px/34px Roboto" }}>
                    Class Teacher's Name:
                  </span>{" "}
                  <span
                    style={{ font: "normal normal normal 13px/34px Roboto" }}
                  >
                    {logBookDetails?.log_book_data?.class_teacher_name}
                  </span>
                </Col>
                <Col md={1}></Col>
                <Col md={4}>
                  <span style={{ font: "normal normal bold 13px/34px Roboto" }}>
                    Day:
                  </span>{" "}
                  <span
                    style={{ font: "normal normal normal 13px/34px Roboto" }}
                  >
                    {logBookDetails?.log_book_data?.day}
                  </span>
                </Col>
                <Col md={1}></Col>
                <Col md={3}>
                  <span style={{ font: "normal normal bold 13px/34px Roboto" }}>
                    Date:
                  </span>{" "}
                  <span
                    style={{ font: "normal normal normal 13px/34px Roboto" }}
                  >
                    {logBookDetails?.log_book_data?.date}
                  </span>
                </Col>
              </Row>
              <div className="routineSection">
                <div></div>
                <Table striped hover>
                  <thead>
                    <tr
                      style={{
                        background: "#7A9ABF 0% 0% no-repeat padding-box",
                        borderRadius: "4px 4px 0px 0px",
                        opacity: "1",
                      }}
                    >
                      <th>Period</th>
                      <th>Students Present</th>
                      <th>Subject</th>
                      <th>Content Taught</th>
                      <th>Homework</th>
                    </tr>
                  </thead>
                  {logBookDetails?.log_book_data ? logBookDetails?.log_book_data?.log_record.map(
                    (logData, indx) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{logData?.period}</td>
                            <td>{logData?.students_present}</td>
                            <td>{logData?.subject}</td>
                            <td>{logData?.content_taught}</td>
                            <td>{logData?.home_work}</td>
                          </tr>
                        </tbody>
                      );
                    }
                  )
                :
                <p style={{top:"43%", left: "42%", position: "absolute", font: "normal normal bold 20px/34px Roboto"}}>No Logbook Available!!</p>}
                </Table>
              </div>
            </div>

            <div className="teacherDashboardAttendance">
              <Row
                style={{
                  height: "74px",
                  boxShadow: "0px 3px 6px #B4B3B329",
                  position: "relative",
                  left: "12px",
                  width: "100%",
                  
                }}
              >
                <Col md={8}>
                  <h4>Student's Attendance</h4>
                </Col>
                <Col md={2} className="teacherRoutingDD">
                <span>
                    <Select
                      placeholder="Class"
                      isSearchable={false}
                      options={classOptions}
                      onChange={(e) => handlegradeToFetchLog(e)}
                    />
                  </span>
                </Col>
                <Col md={2} className="teacherRoutingDD">
                <span>
                    <Select
                      placeholder="Section"
                      isSearchable={false}
                      options={classOptions}
                      onChange={(e) => handlegradeToFetchLog(e)}
                    />
                  </span>
                </Col>
              </Row>

          {/* ATTENDANCE BLOCK */}


              {/* <div>
              <Row style={{padding:"40px"}}>
                <Col md={5} className="studentAttendanceBlock">
                  <Row>
                   <Col md={6}>
                   </Col>
                   <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <h6  style={{fontSize:"13px"}}>Present</h6>
                      </Col>
                      <Col md={6}>
                      <h6  style={{fontSize:"13px"}}>Dress Defaulter</h6>
                      </Col>
                    </Row>
                    </Col> 
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={2}>
                          1.
                        </Col>
                        <Col md={10}>
                          Arjun
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                      </Row>
                      
                    </Col>
                  </Row>
                  
                </Col>

                <Col md={5} className="studentAttendanceBlock">
                <Row>
                   <Col md={6}>
                   </Col>
                   <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <h6 style={{fontSize:"13px"}}>Present</h6>
                      </Col>
                      <Col md={6}>
                      <h6  style={{fontSize:"13px"}}>Dress Defaulter</h6>
                      </Col>
                    </Row>
                    </Col> 
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={2}>
                          2.
                        </Col>
                        <Col md={10}>
                          Ravi
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                      </Row>
                      
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{padding:"40px"}}>
                <Col md={5} className="studentAttendanceBlock">
                  <Row>
                   <Col md={6}>
                   </Col>
                   <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <h6  style={{fontSize:"13px"}}>Present</h6>
                      </Col>
                      <Col md={6}>
                      <h6  style={{fontSize:"13px"}}>Dress Defaulter</h6>
                      </Col>
                    </Row>
                    </Col> 
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={2}>
                          3.
                        </Col>
                        <Col md={10}>
                          Anup
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                      </Row>
                      
                    </Col>
                  </Row>
                  
                </Col>

                <Col md={5} className="studentAttendanceBlock">
                <Row>
                   <Col md={6}>
                   </Col>
                   <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <h6 style={{fontSize:"13px"}}>Present</h6>
                      </Col>
                      <Col md={6}>
                      <h6  style={{fontSize:"13px"}}>Dress Defaulter</h6>
                      </Col>
                    </Row>
                    </Col> 
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={2}>
                          4.
                        </Col>
                        <Col md={10}>
                          Devanshu
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                      </Row>
                      
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{padding:"40px"}}>
                <Col md={5} className="studentAttendanceBlock">
                  <Row>
                   <Col md={6}>
                   </Col>
                   <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <h6  style={{fontSize:"13px"}}>Present</h6>
                      </Col>
                      <Col md={6}>
                      <h6  style={{fontSize:"13px"}}>Dress Defaulter</h6>
                      </Col>
                    </Row>
                    </Col> 
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={2}>
                          5.
                        </Col>
                        <Col md={10}>
                          Chanchal
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                      </Row>
                      
                    </Col>
                  </Row>
                  
                </Col>

                <Col md={5} className="studentAttendanceBlock">
                <Row>
                   <Col md={6}>
                   </Col>
                   <Col md={6}>
                    <Row>
                      <Col md={6}>
                        <h6 style={{fontSize:"13px"}}>Present</h6>
                      </Col>
                      <Col md={6}>
                      <h6  style={{fontSize:"13px"}}>Dress Defaulter</h6>
                      </Col>
                    </Row>
                    </Col> 
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Row>
                        <Col md={2}>
                          6.
                        </Col>
                        <Col md={10}>
                          Bhoot
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6}>
                      <Row>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                        <Col md={6}>
                        <input type="checkbox" />
                        </Col>
                      </Row>
                      
                    </Col>
                  </Row>
                </Col>
              </Row>
              </div> */}
              <div className="studentAttendance">
                <Row style={{boxShadow: "rgba(180, 179, 179, 0.16) 0px 3px 6px", height: "54px"}}>
                  <Col className="studentAttendanceHeader" md={2}>Roll Number</Col>
                  <Col className="studentAttendanceHeader" md={6}>Name</Col>
                  <Col className="studentAttendanceHeader" md={2}>Present</Col>
                  <Col className="studentAttendanceHeader" md={2}>Dress Defaulter</Col>
                </Row>
                <div className='studentAttendanceInner'>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>11</Col>
                  <Col className="studentAttendanceDetails" md={6}>Devanshu</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>14</Col>
                  <Col className="studentAttendanceDetails" md={6}>Chanchal</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>15</Col>
                  <Col className="studentAttendanceDetails" md={6}>Raj</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>12</Col>
                  <Col className="studentAttendanceDetails" md={6}>Anup</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>11</Col>
                  <Col className="studentAttendanceDetails" md={6}>Devanshu</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>14</Col>
                  <Col className="studentAttendanceDetails" md={6}>Chanchal</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>15</Col>
                  <Col className="studentAttendanceDetails" md={6}>Raj</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col className="studentAttendanceDetails" md={2}>12</Col>
                  <Col className="studentAttendanceDetails" md={6}>Anup</Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                  <Col className="studentAttendanceDetails" md={2}><input type="checkbox" /></Col>
                </Row>
                </div>
              </div>
              

              
            </div>
          </Col>
          <Col md={3} style={{ marginTop: "91px", width: "20%" }}>
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
                    {teacherRoutineData?.time_table ? teacherRoutineData?.time_table?.map((routine, indx) => {
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
                  <p>{teacherRoutineData?.message}</p>}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
}

export default TDashboard;