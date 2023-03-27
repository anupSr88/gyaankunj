import React, { useEffect, useState } from 'react'
import TeacherSidebar from '../TeacherSidebar'
import { Row, Col, Table } from "react-bootstrap";
import SadImg from '../../../Images/SadImg.png'
import { viewStudentAttendance } from '../../../ApiClient'

const TeacherAttendance = () => {

    const [studentAttendance, setStudentAttendance] = useState({})

    useEffect(() => {
        fetchStudentAttendance()
    },[])

    const fetchStudentAttendance = () => {
        const grade = "1"
        const section = "1"
        const month = "1"
        viewStudentAttendance(grade, section, month)
        .then((res) => {
            setStudentAttendance(res.data)
            console.log('Attendance - ', res.data)
        })
        .catch((err) => {
            console.log('Attendance Error - ', err)
        })
    }


    return (
        <>

        <Row>
            <Col md={3}  style={{marginTop:"91px", width:"20%"}}>
                <TeacherSidebar />
            </Col>
            <Col md={9} style={{width:"80%"}}>
            <div className="reportSection">
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
            <h4>Attendance</h4>
            </Col>
            <Col md={5}>
            
            </Col>
            <Col md={3}>
            <h4>Month: January</h4>
            </Col>
        </Row>
        <div className="routineSection">
                <div>
                  <Row>
                    <Col md={2}>
                      <h6
                        style={{
                          marginLeft: "12px",
                          paddingTop: "5px",
                          textAlign: "center",
                          font: "normal normal medium 14px/15px Roboto",
                          letterSpacing: "0px",
                          color: "#821CE8",
                          opacity: "1",
                          background: "#F1E7FC 0% 0% no-repeat padding-box",
                          borderRadius: "0px 8px",
                          width: "120px",
                          height: "35px",
                        }}
                      >
                        Class Teacher
                      </h6>
                    </Col>
                    <Col md={3} style={{ textAlign: "initial" }}>
                      {studentAttendance?.class_teacher}
                    </Col>
                  </Row>
                </div>
                <Table bordered striped hover responsive>
                  <thead>
                    <tr
                      style={{
                        background: "#7A9ABF 0% 0% no-repeat padding-box",
                        borderRadius: "4px 4px 0px 0px",
                        opacity: "1",
                        overflow:"auto"
                      }}
                    >
                      <th>Roll No.</th>
                      <th>Students Name</th>
                      <th>%</th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>7</th>
                      <th>8</th>
                      <th>9</th>
                      <th>10</th>
                      <th>11</th>
                      <th>12</th>
                      <th>13</th>
                      <th>14</th>
                      <th>15</th>
                      <th>16</th>
                      <th>17</th>
                      <th>18</th>
                      <th>19</th>
                      <th>20</th>
                      <th>21</th>
                      <th>22</th>
                      <th>23</th>
                      <th>24</th>
                      <th>25</th>
                      <th>26</th>
                      <th>27</th>
                      <th>28</th>
                      <th>29</th>
                      <th>30</th>
                      <th>31</th>
                    </tr>
                  </thead>
                  {/* {studentTotalAttendance?.student_report?.attendance_data.map(
                    (studentAttendance, indx) => {
                      return ( */}
                        <tbody>
                          {studentAttendance?.student_attendance?.map((attendance, indx) => {
                            return (
                                <tr>
                            <td>{attendance.roll_no}</td>
                            <td>{attendance.name}</td>
                            <td>{attendance.roll_no}</td>
                            
                            {Object.entries(attendance?.attendance)?.map(([key, value]) => {
                              return (
                                <td><div className= {value.toString() == 'Present' ? 'present' : 'absent'}></div></td>
                              )
                            })}
                            {/* <td>{attendance?.attendance.value}</td> */}
                          </tr>
                            )
                          })}
                        </tbody>
                      {/* );
                    }
                  )} */}
                </Table>
              </div>
          
        
      </div>
            </Col>
        </Row>
        
        
        </>
    )
}

export default TeacherAttendance