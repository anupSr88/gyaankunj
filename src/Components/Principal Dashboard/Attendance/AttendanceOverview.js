import React from 'react';
import { Row, Col, ButtonGroup, ToggleButton, Dropdown, Table, ProgressBar } from "react-bootstrap";
import { useState } from "react";
import { attendanceOverview, viewAttendanceReport } from '../../../ApiClient'
import { useEffect } from 'react';
import Select from 'react-select'

const AttendanceOverview = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState("1");
    const [tableData, setTableData] = useState([])
    const [overallAttendance, setOverallAttendance] = useState({})
    const [grade, setGrade] = useState('')
    const [section, setSection] = useState('1')
    const [totalAttendance, setTotalAttendance] = useState('')

    useEffect(() => {
      getAttendanceOverview()
      getFullAttendanceData()
  },[grade, section])

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

    const now="100"
  
    const radios = [
      { name: "A", value: "1" },
      { name: "B", value: "2" },
      { name: "C", value: "3" },
      { name: "D", value: "4" },
    ];

    const attendanceRadios = [
      { name: "Teacher", value: "userTypeTeacher" },
      { name: "Student", value: "userTypeStudent" },
    ];


    const handleGradeChange = (e) => {
      setGrade(e.value)
    }
    
    const handleSectionChange = (e) => {
      console.log("e -", e)
      setSection(e.target.defaultValue)
      setRadioValue(e.currentTarget.value)
    }
    
    const getAttendanceOverview = () => {
      const grade_id = grade
        const section_id = section
      attendanceOverview(grade_id, section_id)
      .then((res) => setOverallAttendance(res.data))
      .then((err) => console.log(err))
    }

    const getFullAttendanceData = () => {
      const grade_id = grade
        const section_id = section
        // const user_type = userType
      viewAttendanceReport(grade_id, section_id)
      .then((res) => {
        // console.log('Attendance - ', res.data.student_report.attendance_data)
        setTotalAttendance(res.data)
      })
      .then((err) => console.log(err))
    }


    console.log('totalAttendance - ', totalAttendance)

    return (
        <>
        <div>
      <div className="attendanceSectionOverview">
        <Row
          style={{
            height: "74px",
            boxShadow: "0px 3px 6px #B4B3B329",
            position: "relative",
            left: "12px",
            width: "100%",
          }}
        >
          <Col md={6}>
            <h4>Attendance Overview</h4>
          </Col>
        </Row>
        <Row>
          <Col
            md={3}
            className="attendanceOverviewInner"
            style={{
              borderRight: "1px solid #EFF1F4",
              height: "175px",
              paddingTop: "20px",
            }}
          >
            <h6 style={{ marginLeft: "12px", paddingTop:"5px" ,textAlign: "center", font: "normal normal medium 14px/15px Roboto", letterSpacing: "0px", color: "#821CE8", opacity: "1" }}>Teacher</h6>
            <Row style={{ margin: "10px 0px" }}>
              <Col>
                <span>Present</span>
              </Col>
              <Col>
                <p>{overallAttendance?.attendance_overview?.teacher?.present}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Absent</span>
              </Col>
              <Col>
                <p>{overallAttendance?.attendance_overview?.teacher?.absent}</p>
              </Col>
            </Row>
          </Col>
          <Col md={9} className="attendanceOverviewInner">
            <Row>
              <Col md={9}>
                <h6
                  style={{ background: "#DEFABD 0% 0% no-repeat padding-box", marginLeft: "12px", paddingTop:"5px" ,textAlign: "center", font: "normal normal medium 14px/15px Roboto", letterSpacing: "0px", color: "#608E29", opacity: "1" }}
                >
                  Student
                </h6>
              </Col>
              <Col md={3}>
                <span>
                <Select placeholder="Select Grade" options={gradeOptions} onChange={e => handleGradeChange(e)} isSearchable={false} />
                </span>
              </Col>
            </Row>

            <Row style={{ width: "70%" }}>
              <Col md={4}>
                <span style={{ marginRight: "20px" }}>Overview</span>
                <span
                  style={{
                    textAlign: "center",
                    font: "normal normal bold 27px/35px Roboto",
                    letterSpacing: "0px",
                    color: "#608E29",
                    opacity: "1",
                  }}
                >
                  {overallAttendance?.attendance_overview?.student?.total}
                </span>
              </Col>
              <Col>
                <span style={{ marginRight: "20px" }}>Present</span>
                <span
                  style={{
                    textAlign: "center",
                    font: "normal normal bold 27px/35px Roboto",
                    letterSpacing: "0px",
                    color: "#608E29",
                    opacity: "1",
                  }}
                >
                  {overallAttendance?.attendance_overview?.student?.present}
                </span>
              </Col>
              <Col>
                <span style={{ marginRight: "20px" }}>Absent</span>
                <span
                  style={{
                    textAlign: "center",
                    font: "normal normal bold 27px/35px Roboto",
                    letterSpacing: "0px",
                    color: "#608E29",
                    opacity: "1",
                  }}
                >
                  {overallAttendance?.attendance_overview?.student?.absent}
                </span>
              </Col>
            </Row>
            <Row
              style={{
                width: "70%",
                marginTop: "12px",
                border: "1px solid #EFF1F4",
                borderRadius: "8px",
                backgroundColor: "#E1E9F3",
                height: "53px",
                paddingTop: "7px",
                
              }}
            >
              <Col>
                <h5>Select Section</h5>
              </Col>
              <Col>
              <ButtonGroup>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      className="toggleBtn"
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant={idx % 1 ? "outline-success" : "outline-primary"}
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => handleSectionChange(e)}
                      disabled={!grade}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col md={6}>
          <p>Teacher</p>
          </Col>
          <Col md={6}>
          <p>Student</p>
          </Col>
        </Row>
      </div>

      <div className="teacherAndStdAttendance">
      <Row
          style={{
            height: "74px",
            boxShadow: "0px 3px 6px #B4B3B329",
            position: "relative",
            left: "12px",
            width: "100%",
          }}
        >
            <Col md={6}>
            <h4>Students Attendance</h4>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
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
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
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
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Select Year
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">2023</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2022 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">2021 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
        </Row>
        <div className="routineSection">
            <div>
              <Row>
                <Col md={2}>
                <h6 style={{ marginLeft: "12px", paddingTop:"5px" ,textAlign: "center", font: "normal normal medium 14px/15px Roboto", letterSpacing: "0px", color: "#821CE8", opacity: "1", background: "#F1E7FC 0% 0% no-repeat padding-box", borderRadius: "0px 8px", width: "120px", height: "35px"}}>Teacher</h6>
                </Col>
                <Col md={3} style={{textAlign: "initial"}}>
                    Julie
                </Col>
              </Row>
            </div>
            <Table striped hover>
              <thead>
                <tr style={{background: "#7A9ABF 0% 0% no-repeat padding-box", borderRadius: "4px 4px 0px 0px", opacity: "1"}}>
                  <th style={{width:"100px"}}>Roll No.</th>
                  <th style={{width:"230px"}}>Students Name</th>
                  <th style={{width:"205px"}}>No. of days present</th>
                  <th style={{width:"205px"}}>No. of days absent</th>
                  <th>Attendance %</th>
                </tr>
              </thead>
              {totalAttendance?.student_report?.attendance_data.map((studentAttendance, indx) => {
               return <tbody>
                <tr>
                <td>{studentAttendance.roll_no}</td>
                  <td>{studentAttendance.student_name}</td>
                  <td>{studentAttendance.present_days}</td>
                  <td>{studentAttendance.absence_count}</td>
                  <td><ProgressBar variant="progressBarColour" now={studentAttendance.attendance_percentage} label={`${studentAttendance.attendance_percentage} %`} /></td>                 
                </tr>
              </tbody>
              })}
            </Table>
          </div>
        
      </div>

      <div className="teacherAndStdAttendance">
      <Row
          style={{
            height: "74px",
            boxShadow: "0px 3px 6px #B4B3B329",
            position: "relative",
            left: "12px",
            width: "100%",
          }}
        >
            <Col md={6}>
            <h4>Teachers Attendance</h4>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
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
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
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
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Select Attendance
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Weekly</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Monthly </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Yearly </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
            <div className="routineSection">
            <div>
              {/* <Row>
                <Col md={2}>
                <h6 style={{ marginLeft: "12px", paddingTop:"5px" ,textAlign: "center", font: "normal normal medium 14px/15px Roboto", letterSpacing: "0px", color: "#821CE8", opacity: "1", background: "#F1E7FC 0% 0% no-repeat padding-box", borderRadius: "0px 8px", width: "120px", height: "35px"}}>Teacher</h6>
                </Col>
                <Col md={3} style={{textAlign: "initial"}}>
                    Julie
                </Col>
              </Row> */}
            </div>
            <Table striped hover>
              <thead>
                <tr style={{background: "#7A9ABF 0% 0% no-repeat padding-box", borderRadius: "4px 4px 0px 0px", opacity: "1"}}>
                  <th style={{width:"100px"}}>Emp ID</th>
                  <th style={{width:"230px"}}>Teacher Name</th>
                  <th style={{width:"205px"}}>No. of days present</th>
                  <th style={{width:"205px"}}>No. of days absent</th>
                  <th>Attendance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>1</td>
                  <td>Asha</td>
                  <td>20</td>
                  <td>0</td>
                  <td><ProgressBar variant="progressBarColour" now={now} label={`${now} %`} /></td>                 
                </tr>

                <tr>
                <td>1</td>
                  <td>Asha</td>
                  <td>20</td>
                  <td>0</td>
                  <td><ProgressBar variant="progressBarColour" now={now} label={`${now} %`} /></td>                 
                </tr>

                <tr>
                <td>1</td>
                  <td>Asha</td>
                  <td>20</td>
                  <td>0</td>
                  <td><ProgressBar variant="progressBarColour" now={now} label={`${now} %`} /></td>                 
                </tr>
              </tbody>
            </Table>
          </div>
            
        </Row>
      </div>
    </div>
        
        </>
    )
}

export default AttendanceOverview;