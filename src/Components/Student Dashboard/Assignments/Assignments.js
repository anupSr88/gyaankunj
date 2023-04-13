import React, { useEffect, useState } from 'react'
import {Row, Col, Table, Button} from 'react-bootstrap'
import StudentSidebar from '../StudentSidebar'
import {studentAssignmentList} from '../../../ApiClient'

const StudentAssigments = () => {

    const userDetails = JSON.parse(localStorage.getItem('UserData'))

    const [assignmentFullList, setAssignmentFullList] = useState({})

    useEffect(() => {
        fetchStudentAssignments();
    }, [])

    const fetchStudentAssignments = () => {
        const student_id = userDetails.user_id
        studentAssignmentList(student_id)
        .then((res) => setAssignmentFullList(res.data))
        .catch((err) => console.log("Assignment Tab err - ", err))
    }

    console.log("assignmentFullList - ", assignmentFullList)


    return (
        <>
        <Row>
          <Col md={3} style={{ marginTop: "91px", width:"20%"}}>
            <StudentSidebar />
          </Col>
          <Col md={9} style={{ marginTop: "91px", width:"79%"}}>
        <Row style={{marginBottom:"20px"}}>
              
                <div className="assignmentTabData">
                <Row
                style={{
                  height: "68px",
                  boxShadow: "0px 3px 6px #B4B3B329",
                  position: "relative",
                  left: "12px",
                  width: "100%",
                }}
              >
                <Col md={4}>
                  <h4>New Assignment</h4>
                </Col>
                {/* <Col md={2} className="teacherRoutingDD">
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
                </Col> */}
              </Row>
              <Row md={12} style={{justifyContent:"space-evenly", paddingTop:"20px"}}>
                <Col md={12} className="AssignmentDetails">
                <Table striped hover>
                  <thead>
                    <tr
                      style={{
                        background: "#7A9ABF 0% 0% no-repeat padding-box",
                        borderRadius: "4px 4px 0px 0px",
                        opacity: "1",
                      }}
                    >
                      <th>Sl. No.</th>
                      <th>Subject</th>
                      <th>Details</th>
                      <th>Actions</th>
                      <th>Assigned on</th>
                    </tr>
                  </thead>
                  {assignmentFullList?.student_assignments?.map(
                    (assignment, indx) => {
                        console.log("assignment - ", assignment)
                      return assignment?.assignment_status == "new" ? (
                        <tbody>
                          <tr>
                            <td>{indx + 1}</td>
                            <td>Maths</td>
                            <td>{assignment?.assignment_name}</td>
                            <td><Button variant="outline-primary">Start</Button></td>
                            <td>1-1-2022</td>
                          </tr>
                        </tbody>
                      )
                      :
                      (<p>No Assignments Available!!</p>)
                    }
                  )}
               
                </Table>
                </Col>
              </Row>

                </div>
            </Row>

            <Row style={{marginBottom:"20px"}}>
              
                <div className="assignmentTabData">
                <Row
                style={{
                  height: "68px",
                  boxShadow: "0px 3px 6px #B4B3B329",
                  position: "relative",
                  left: "12px",
                  width: "100%",
                }}
              >
                <Col md={4}>
                  <h4>In Progress Assignment</h4>
                </Col>
                {/* <Col md={2} className="teacherRoutingDD">
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
                </Col> */}
              </Row>
              <Row md={12} style={{justifyContent:"space-evenly", paddingTop:"20px"}}>
                <Col md={12} className="AssignmentDetails">
                <Table striped hover>
                  <thead>
                    <tr
                      style={{
                        background: "#7A9ABF 0% 0% no-repeat padding-box",
                        borderRadius: "4px 4px 0px 0px",
                        opacity: "1",
                      }}
                    >
                      <th>Sl. No.</th>
                      <th>Subject</th>
                      <th>Details</th>
                      <th>Actions</th>
                      <th>Assigned on</th>
                    </tr>
                  </thead>
                  {assignmentFullList?.student_assignments?.map(
                    (assignment, indx) => {
                        console.log("assignment - ", assignment)
                      return assignment?.assignment_status == "inInprogress" ? (
                        <tbody>
                          <tr>
                            <td>{indx + 1}</td>
                            <td>Maths</td>
                            <td>{assignment?.assignment_name}</td>
                            <td><Button variant="outline-primary">Open</Button></td>
                            <td>1-1-2022</td>
                          </tr>
                        </tbody>
                      )
                      :
                      (<p>No Assignments Available!!</p>)
                    }
                  )}
                </Table>
                </Col>
              </Row>

                </div>
            </Row>

            <Row style={{marginBottom:"20px"}}>
              
                <div className="assignmentTabData">
                <Row
                style={{
                  height: "68px",
                  boxShadow: "0px 3px 6px #B4B3B329",
                  position: "relative",
                  left: "12px",
                  width: "100%",
                }}
              >
                <Col md={4}>
                  <h4>Submitted Assignment</h4>
                </Col>
                {/* <Col md={2} className="teacherRoutingDD">
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
                </Col> */}
              </Row>
              <Row md={12} style={{justifyContent:"space-evenly", paddingTop:"20px"}}>
                <Col md={12} className="AssignmentDetails">
                <Table striped hover>
                  <thead>
                    <tr
                      style={{
                        background: "#7A9ABF 0% 0% no-repeat padding-box",
                        borderRadius: "4px 4px 0px 0px",
                        opacity: "1",
                      }}
                    >
                      <th>Sl. No.</th>
                      <th>Subject</th>
                      <th>Details</th>
                      <th>Actions</th>
                      <th>Assigned on</th>
                    </tr>
                  </thead>
                  {assignmentFullList?.student_assignments?.map(
                    (assignment, indx) => {
                        console.log("assignment - ", assignment)
                      return assignment?.assignment_status == "Submitted" ? (
                        <tbody>
                          <tr>
                            <td>{indx + 1}</td>
                            <td>Maths</td>
                            <td>{assignment?.assignment_name}</td>
                            <td>{assignment?.assignment_status}</td>
                            <td>1-1-2022</td>
                          </tr>
                        </tbody>
                      )
                      :
                      (<p>No Assignments Available!!</p>)
                    }
                  )}
                </Table>
                </Col>
              </Row>

                </div>
            </Row>
            </Col>
            </Row>
        </>
    )
}

export default StudentAssigments;