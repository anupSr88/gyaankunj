import React from 'react';
import { Row, Col, ButtonGroup, ToggleButton, Dropdown, Table, ProgressBar } from "react-bootstrap";
import { useState } from "react";

const ReportSection = () => {

    const now = "60";


    return (
        <>
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
            <h4>Report</h4>
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
                    Select Subject
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
                    Select Report
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Weekly</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Monthly </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Yearly </Dropdown.Item>
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
        
      </div>
        
        </>
    )
}

export default ReportSection;