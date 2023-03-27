import React from 'react'
import {Row, Col, Table} from 'react-bootstrap'

const StudentAssigments = () => {
    return (
        <>
        <Row>
              <Col md={3}>
                <div className="assignmentInDashboard">
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
                  {assignmentData?.student_assignments ? assignmentData?.student_assignments?.map(
                    (assignment, indx) => {
                      return (
                        <tbody>
                          <tr>
                            <td>{indx + 1}</td>
                            <td>Maths</td>
                            <td>{assignment?.assignment_name}</td>
                            <td>{assignment?.assignment_type_name}</td>
                            <td>{assignment?.assignment_status}</td>
                          </tr>
                        </tbody>
                      );
                    }
                  )
                :
                <p style={{top:"43%", left: "42%", position: "absolute", font: "normal normal bold 20px/34px Roboto"}}>No Assignments Available!!</p>}
                </Table>
                </Col>
              </Row>

                </div>
              </Col>
            </Row>
        </>
    )
}

export default StudentAssigments;