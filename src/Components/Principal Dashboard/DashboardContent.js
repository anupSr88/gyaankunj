import React, { useState } from "react";
import "./PrincipalDashboard.css";
import { Row, Col, ButtonGroup, ToggleButton, Dropdown } from "react-bootstrap";
import TableComponent from '../Shared Components/TableComponent'
import RoutineTableComponent from '../Shared Components/RoutineTable'
import mockData from '../../Mock Data/mockdata.json'
import routineData from '../../Mock Data/routineData.json'

const DashboardContent = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [tableData, setTableData] = useState([])

  const radios = [
    { name: "A", value: "1" },
    { name: "B", value: "2" },
    { name: "C", value: "3" },
    { name: "D", value: "4" },
  ];

  const column = [
    { field:"Period", value:"Period" },
    { field:"Students present", value:"Student Present" },
    { field:"Subject", value:"Subject" },
    { field:"Content taught", value:"Content Taught" },
    { field:"Homework", value:"Homework" },
    { field:"Absentees", value:"Absent" },
]

const routineColumn = [
    { field:"1st", value: "Subject"},
    { field:"2nd", value: "Subject"},
    { field:"3rd", value: "Subject"},
    { field:"4th", value: "Subject"},
    { field:"Break", value: "Subject"},
    { field:"5th", value: "Subject"},
    { field:"6th", value: "Subject"},
    { field:"7th", value: "Subject"},
    { field:"8th", value: "Subject"},
]

const routineRow = [
    {field:"Hindi", value: "Hindi"},
    {field:"Time", value: "Time"},
    {field:"Teacher", value: "Teacher"}
]

  return (
    <div>
      <div className="attendanceOverview">
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
                <p>5000</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Absent</span>
              </Col>
              <Col>
                <p>825</p>
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
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Class
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
                  50
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
                  45
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
                  05
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
                marginLeft: "5px",
              }}
            >
              <Col>
                <h5>Section</h5>
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
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
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

      <div className="teacherRoutine">
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
            <h4>Teacher Routine</h4>
            </Col>
            <Col md={2} className="teacherRoutingDD">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Section
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
                    Class
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
        </Row>
        <Row>
            <Col>
            <RoutineTableComponent column = {routineColumn} data={routineData} rowData={routineRow} />
            </Col>
        </Row>
      </div>

      <div className="dashboardLogbook">
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
            <h4>Log Book</h4>
            </Col>
            <Col md={4} className="DLogbook">
            <p>Action : Verify</p>
            </Col>
            <Col md={2} className="DLogbook">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Section
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
            <Col md={2} className="DLogbook">
            <span>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdownHead" id="dropdown-basic">
                    Class
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">2 </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">3 </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
            </Col>
        </Row>
        <Row>
            <Col>
            <TableComponent column = {column} data={mockData}/>
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardContent;
